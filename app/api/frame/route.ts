import { NextRequest, NextResponse } from "next/server";    

async function getResponse(req: NextRequest): Promise<NextResponse> {
    const searchParams = req.nextUrl.searchParams;
    const id:any = searchParams.get('id');
    const idAsNumber = parseInt(id);

    const nextId = idAsNumber + 1;

    if (idAsNumber === 4) {
        return new NextResponse(`<!DOCTYPE html><html><head>
        <title>Monster Nr. 4</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmd6A6cTZo1ULZybN9MirUgWTuEd6gfJhYVhouxZFGbWyG/0_0-midjourney-0${id}.png" />
        <meta property="fc:frame:button:1" content="Check Out My Portfolio" />
        <meta property="fc:frame:button:1:action" content="post_redirect" />
        <meta property="fc:frame:button:2" content="Check Out A Random Project" />
        <meta property="fc:frame:button:2:action" content="post_redirect" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
        </head></html>`);
    }else {
        return new NextResponse(`<!DOCTYPE html><html><head>
        <title>Monster Nr. ${id}</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmd6A6cTZo1ULZybN9MirUgWTuEd6gfJhYVhouxZFGbWyG/0_0-midjourney-0${id}.png" />
        <meta property="fc:frame:button:1" content="Next Monster" />        
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
        </head></html>`);
    }
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse (req);
}

export const dynamic = 'force-dynamic';