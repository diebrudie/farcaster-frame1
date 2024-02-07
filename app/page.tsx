import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons:[
    {
      label: "Monster Me"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmd6A6cTZo1ULZybN9MirUgWTuEd6gfJhYVhouxZFGbWyG/0_0-midjourney-01.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,  
});

export const metadata: Metadata = {
  title: 'My Midjourney Cutie Monsters',
  description: 'A showcase of my Midjourney Cutie Monsters',
  openGraph: {
    title: 'My Midjourney Cutie Monsters',
    description: 'A showcase of my Midjourney Cutie Monsters',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmd6A6cTZo1ULZybN9MirUgWTuEd6gfJhYVhouxZFGbWyG` ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return(
    <>
      <h1>diebrudie cutie monsters</h1>
    </>
  )
}
