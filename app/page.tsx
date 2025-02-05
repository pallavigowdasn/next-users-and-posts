"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchUserPosts } from "./utils/api";
import UserCard from "./components/UserCard";
import PostList from "./components/PostList";

export default function Home() {
  const [selectedUser, setSelectedUser] = useState(null);

  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ["posts", selectedUser],
    queryFn: () => fetchUserPosts(selectedUser),
    enabled: !!selectedUser,
  });

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users.</p>;

  return (
    <div>
      <h1>Users & Posts Dashboard</h1>

      {/* ✅ FIX: Check if users exist before mapping */}
      {Array.isArray(users) && users.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }} className="card">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onSelect={() => setSelectedUser(user.id)} />
          ))}
        </div>
      ) : (
        <p>No users found.</p>
      )}

      {selectedUser && (
        <div>
          <h2>Posts by Selected User</h2>
          {postsLoading ? <p>Loading posts...</p> : <PostList posts={posts || []} />}
        </div>
      )}
    </div>
  );
}


