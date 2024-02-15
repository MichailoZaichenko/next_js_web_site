import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  downloadLink: string;
}
import React from 'react'



const ResourceCard = ({id, title, image, downloadNumber, downloadLink}: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparant sm:max-w-[365px]">
      <Link href={downloadLink} target='_blank'>
        <CardHeader className="flex-cneter flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image 
            src={image}
            className='h-full rounded-md object cover'
            width={384}
            height={440}
            alt={title}>
            </Image>
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
      </Link>
        <CardContent className="flex-between mt-4 p-0">
          <div className="flex-center body-medium gap-1.5 text-white">
            <Image src='/downloads.svg' width={20} height={20} alt='download' />
            {downloadNumber}
          </div>
          <Link href={downloadLink} target='_blank' className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
            Download now
            <Image src='/arrow-blue.svg' width={13} height={10} alt='Download arrow'/>
          </Link>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
    </Card>
  )
}

export default ResourceCard