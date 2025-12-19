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
    <section className='max-w-5xl mx-auto px-4 md:px-0 py-2 rounded-2xl' style={{backgroundImage: "url('/img/cta-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='text-center mb-12'>
            <h2 className='text-2xl font-semibold dark:text-foreground !text-white mb-4'>
                Ready to transform your business?
            </h2>
            <p className='!text-white/60 dark:!text-white/60 max-w-xl mx-auto text-sm !font-primary'>
                Start building intelligent AI agents to engage with customers.
            </p>
            <div className='flex flex-col justify-center items-center md:flex-row gap-4 mt-8'>
                {
                    button1 && (
                        <ModernButton variant='primary' className='w-full md:w-auto' onClick={() => window.open(button1Link, '_blank')}>
                            {button1}
                        </ModernButton>
                    )
                }
                {
                    button2 && (
                        <ModernButton variant='outline' className='w-full md:w-auto !text-neutral-200 hover:!text-neutral-700 dark:!border-neutral-200 dark:hover:!bg-neutral-200' onClick={() => window.open(button2Link, '_blank')}>
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