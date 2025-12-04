"use client";
import { useParams } from "next/navigation";

function UserDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1> Show detail number {id}</h1>
    </div>
  );
}

export default UserDetail;
