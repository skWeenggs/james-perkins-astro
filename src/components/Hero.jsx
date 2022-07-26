import React from "react";

export default function Hero() {

  return(
    <div className="hero min-h-full">
			<div className="hero-content flex-col justify-center lg:flex-row-reverse mb-12">
				<img src="https://res.cloudinary.com/dub20ptvt/image/upload/v1656522533/PFP_Slack_tsiwxe.webp"
					alt="James Perkins" className="md:max-w-sm rounded-lg shadow-2xl object-contain" />
				<div>
					<h1 className="text-5xl font-bold">James Perkins</h1>
					<p>Sr Developer Advocate</p>
					<p className="py-6 text-xl">Helping developers understand the Jamstack, and how it can be used to build a faster
						web.</p>
				</div>

			</div>

		</div>
  )
}