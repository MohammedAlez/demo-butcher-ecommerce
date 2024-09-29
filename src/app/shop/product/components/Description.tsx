
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import { Children } from 'react';


export default function Description({detailed_description}:{detailed_description:BlocksContent}){

    return (
        <div className="p-4 py-6 prose detailed-desc">
            <BlocksRenderer content={detailed_description} />
        </div>
    )
}