import { Card, CardContent } from '@/ui/card';
import React from 'react'
type ClientType = {
    icon: string;
    text: string;
};
const WhoWeServe = ({data,title,description}:{data:ClientType[],title:string,description?:string}) => {
    return (
        <>

            <section className="tw-px-4 tw-bg-white/50 tw-backdrop-blur-sm">
                <div className="tw-container tw-mx-auto tw-max-w-6xl">

                    <div className="info-bx tw-mt-10">
                        <div className="heading-bx text-left">
                            <h3 className="tw-text-2xl md:!tw-text-3xl tw-text-center">{title}</h3>
                        </div>
                        {
                            description &&
                            <div className='tw-text-center tw-text-xl'>
                                <p>{description}</p>
                            </div>
                        }
                
                        <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
                            {data.map((client, index) => (
                                <Card key={index} className="tw-text-center hover:tw-shadow-lg tw-transition-shadow" style={{
                                    border: "1px solid hsl(240 5.9% 90%)",
                                }}>
                                    <CardContent className="!tw-p-6">
                                        <div className="tw-text-4xl tw-mb-4">{client.icon}</div>
                                        <p className="tw-text-gray-700 tw-font-medium">{client.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default WhoWeServe