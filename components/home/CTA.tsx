"use client";
import React from 'react';
import ModernButton from '../ui/ModernButton';
interface CTAProps {
    button1: string;
    button2: string;
    button1Link: string;
    button2Link: string;
}

export function CTA({button1,button2,button1Link = "#",button2Link = "#"}:CTAProps) {
return (
    <section className='max-w-5xl mx-auto px-4 md:px-0 py-2'>
        <div className='text-center mb-12'>
            <h2 className='text-2xl font-semibold text-foreground mb-4'>
                Ready to transform your business?
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto text-sm'>
                Start building intelligent AI agents today and revolutionize how you engage with customers.
            </p>
            <div className='flex flex-col justify-center items-center md:flex-row gap-4 mt-12'>
                {
                    button1 && (
                        <ModernButton variant='primary' className='w-full md:w-auto' onClick={() => window.open(button1Link, '_blank')}>
                            {button1}
                        </ModernButton>
                    )
                }
                {
                    button2 && (
                        <ModernButton variant='outline' className='w-full md:w-auto' onClick={() => window.open(button2Link, '_blank')}>
                            {button2}
                        </ModernButton>
                    )
                }
            </div>
        </div> 

       
        
    </section>
);
}
export default CTA;