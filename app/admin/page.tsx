"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Submission = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "contacted" | "closed";
};

type Filter = "all" | "new" | "contacted" | "closed";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"submissions" | "settings">("submissions");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [notifyEmails, setNotifyEmails] = useState<string[]>([]);
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    fetchSubmissions();
    fetchSettings();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch("/api/admin/submissions");
      if (!response.ok) {
        if (response.status === 401) {
          router.push("/admin/login");
          return;
        }
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/admin/settings");
      if (response.ok) {
        const data = await response.json();
        setNotifyEmails(data.notifyEmails || []);
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const updateStatus = async (id: string, currentStatus: string) => {
    const statusCycle = { new: "contacted", contacted: "closed", closed: "new" };
    const newStatus = statusCycle[currentStatus as keyof typeof statusCycle];

    try {
      const response = await fetch(`/api/admin/submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setSubmissions((prev) =>
          prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus as any } : sub))
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const addEmail = async () => {
    if (!newEmail || !newEmail.includes("@")) return;
    const updated = [...notifyEmails, newEmail];
    setNotifyEmails(updated);
    setNewEmail("");
    await saveSettings(updated);
  };

  const removeEmail = async (email: string) => {
    const updated = notifyEmails.filter((e) => e !== email);
    setNotifyEmails(updated);
    await saveSettings(updated);
  };

  const saveSettings = async (emails: string[]) => {
    try {
      await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notifyEmails: emails }),
      });
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  const filteredSubmissions = submissions.filter(
    (sub) => filter === "all" || sub.status === filter
  );

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "contacted":
        return "bg-yellow-100 text-yellow-800";
      case "closed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#003754] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">PointOak Admin</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("submissions")}
            className={`px-6 py-3 font-semibold border-b-2 transition ${
              activeTab === "submissions"
                ? "border-[#003754] text-[#003754]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Submissions
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-6 py-3 font-semibold border-b-2 transition ${
              activeTab === "settings"
                ? "border-[#003754] text-[#003754]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Settings
          </button>
        </div>

        {/* Submissions Tab */}
        {activeTab === "submissions" && (
          <div>
            {/* Filters */}
            <div className="flex space-x-2 mb-6">
              {(["all", "new", "contacted", "closed"] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg font-medium capitalize transition ${
                    filter === f
                      ? "bg-[#003754] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Table */}
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Loading submissions...</p>
              </div>
            ) : filteredSubmissions.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <p className="text-gray-500">No submissions found.</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredSubmissions.map((submission) => (
                      <tr
                        key={submission.id}
                        className="hover:bg-gray-50 cursor-pointer transition"
                        onClick={() =>
                          setExpandedId(expandedId === submission.id ? null : submission.id)
                        }
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(submission.created_at)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {submission.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {submission.subject}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateStatus(submission.id, submission.status);
                            }}
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full capitalize ${getStatusBadgeColor(
                              submission.status
                            )}`}
                          >
                            {submission.status}
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedId(expandedId === submission.id ? null : submission.id);
                            }}
                            className="text-[#003754] hover:text-[#005580] font-medium"
                          >
                            {expandedId === submission.id ? "Hide" : "View"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Expanded Message */}
                {expandedId && (
                  <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                    {filteredSubmissions
                      .filter((s) => s.id === expandedId)
                      .map((submission) => (
                        <div key={submission.id}>
                          <h3 className="font-semibold text-gray-900 mb-2">Message:</h3>
                          <p className="text-gray-700 whitespace-pre-wrap">{submission.message}</p>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Notification Emails</h2>

            {/* Email List */}
            <div className="space-y-2 mb-6">
              {notifyEmails.map((email) => (
                <div
                  key={email}
                  className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg"
                >
                  <span className="text-gray-700">{email}</span>
                  <button
                    onClick={() => removeEmail(email)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Add Email */}
            <div className="flex space-x-2">
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="email@example.com"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003754] focus:border-transparent outline-none"
              />
              <button
                onClick={addEmail}
                className="px-6 py-2 bg-gradient-to-r from-[#003754] to-[#005580] text-white font-semibold rounded-lg hover:from-[#002a40] hover:to-[#004466] transition"
              >
                Add Email
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
