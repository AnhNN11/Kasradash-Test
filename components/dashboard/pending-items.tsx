"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface PendingItem {
  id: number
  name: string
  description: string
}

interface PendingItemsProps {
  title: string
  items: PendingItem[]
  type: "supplier" | "event"
}

export function PendingItems({ title, items, type }: PendingItemsProps) {
  const [pendingItems, setPendingItems] = useState<PendingItem[]>(items)
  const [selectedItem, setSelectedItem] = useState<PendingItem | null>(null)
  const [dialogAction, setDialogAction] = useState<"approve" | "reject" | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleAction = (item: PendingItem, action: "approve" | "reject") => {
    setSelectedItem(item)
    setDialogAction(action)
    setDialogOpen(true)
  }

  const confirmAction = () => {
    if (selectedItem) {
      setPendingItems(pendingItems.filter((item) => item.id !== selectedItem.id))
    }
    setDialogOpen(false)
  }

  return (
    <>
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}
            <Badge variant="outline">{pendingItems.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {pendingItems.length > 0 ? (
            <div className="space-y-4">
              {pendingItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0"
                      onClick={() => handleAction(item, "approve")}
                    >
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="sr-only">Approve</span>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0"
                      onClick={() => handleAction(item, "reject")}
                    >
                      <X className="h-4 w-4 text-red-500" />
                      <span className="sr-only">Reject</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-24 text-muted-foreground">
              No pending {type === "supplier" ? "suppliers" : "events"} to review
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {dialogAction === "approve" ? "Approve" : "Reject"} {type}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {dialogAction === "approve"
                ? `Are you sure you want to approve ${selectedItem?.name}?`
                : `Are you sure you want to reject ${selectedItem?.name}?`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmAction}>
              {dialogAction === "approve" ? "Approve" : "Reject"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
