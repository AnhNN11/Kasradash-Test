"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Flag } from "lucide-react";

interface ReportedPost {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  reports: number;
}

export function ReportedPosts() {
  const router = useRouter();
  const [posts, setPosts] = useState<ReportedPost[]>([
    {
      id: "1",
      title: "Understanding Modern Web Development Frameworks",
      excerpt:
        "Web development has evolved significantly over the past decade, with modern frameworks making it easier than ever to build complex applications.",
      author: {
        name: "Alex Johnson",
        avatar: "#",
      },
      date: "May 18, 2025",
      reports: 2,
    },
    {
      id: "2",
      title: "The Future of Artificial Intelligence in Business",
      excerpt:
        "Artificial intelligence is transforming how businesses operate, from customer service to product development and strategic decision-making.",
      author: {
        name: "Sarah Chen",
        avatar: "#",
      },
      date: "May 15, 2025",
      reports: 1,
    },
    {
      id: "3",
      title: "Sustainable Practices in Modern Manufacturing",
      excerpt:
        "Companies are increasingly adopting sustainable manufacturing practices to reduce their environmental impact and meet consumer demands.",
      author: {
        name: "Michael Rodriguez",
        avatar: "#",
      },
      date: "May 10, 2025",
      reports: 3,
    },
    {
      id: "4",
      title: "Cybersecurity Essentials for Small Businesses",
      excerpt:
        "Small businesses are increasingly becoming targets for cyberattacks. Learn the essential security measures to protect your business.",
      author: {
        name: "Emily Wilson",
        avatar: "#",
      },
      date: "May 5, 2025",
      reports: 1,
    },
  ]);

  const viewPost = (id: string) => {
    router.push(`/dashboard/posts/${id}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Reported Posts
          <Badge variant="outline">{posts.length}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden border">
              <CardContent className="p-0">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                        />
                        <AvatarFallback>
                          {post.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        {post.author.name}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Flag className="h-3.5 w-3.5 text-red-500 mr-1" />
                      <span className="text-xs font-medium text-red-500">
                        {post.reports}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold line-clamp-1">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => viewPost(post.id)}
                    >
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
