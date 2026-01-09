import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ClockIcon, CalendarDays } from 'lucide-react';

export function BlogCard() {
    return (
        <Card className="">
            <Image
                src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={250}
                height={250} className='aspect-video w-full object-cover ' />
            <CardHeader>
                <CardTitle className='text-primary font-semibold'>Blog: A very long title for the testing purpose.</CardTitle>

                <CardAction>
                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </CardAction>
                <CardDescription className='line-clamp-3'>
                    <p className='line-clamp-3'>There are a lot of UI blocks in Tailwind Plus that need JavaScript to really be useful, like dialogs, dropdowns, command palettes, and more. And unless you're a React or Vue user, using those UI blocks has always meant writing all of that tricky JavaScript yourself. Well today that finally change</p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-3">
                    <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                        Technology
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <ClockIcon className="h-4 2-4" />5 min read
                    </div>
                </div>
            </CardContent>
            <CardFooter className='flex justify-between items-center'>
                <Link href="/blogs/#" className='text-primary font-medium'>Read More...</Link>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />Nov 20, 2024
                </div>
            </CardFooter>
        </Card>
    )
}