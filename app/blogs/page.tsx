import { BlogCard } from '@/components/blogCard';
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button';
import { Mails } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export const metadata: Metadata = {
  title: 'Blogs',
}

export default function Blogs() {
  return (
    <div className='px-7 mb-9'>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight">
          Welcome to my blog!
        </h2>
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="outline"><Mails /> Subscribe for newsletter</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Subscribe to newsletter</DialogTitle>
                <DialogDescription>
                  Stay updated on new releases and features, guides, and case studies.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" defaultValue="Naruto Uzumaki" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" defaultValue="mail@example.com" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Subscribe</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>

      <div className='grid my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 border border-dashed p-6 rounded-lg'>
        {Array.from({ length: 10 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

    </div>
  );
}