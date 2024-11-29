'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Check,  LineChart, Moon, PieChart, Search, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white">

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0F1115]/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold">
              <span className="text-green-600 text-xl ">Jungle</span> <span className="text-white text-lg ">Enterprice</span>
            </Link>
            <nav className="hidden md:block">
              <ul className="flex gap-6 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Company
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
          <Moon className="h-5 w-5 text-gray-500" />
          <Search className="h-5 w-5 text-gray-500" />
        </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[750px] overflow-hidden pt-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-[750px] w-full object-cover"
          src="/video/web.mp4"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-[1200px] px-4 pt-20">
            <div className="inline-block text-sm text-white/80 bg-white/20 px-4 py-2 rounded-full backdrop-filter backdrop-blur-lg">
              Community Solutions
            </div>
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight pt-10">
            Drive Change with 10X Impactful Visibility
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Empower communities by driving meaningful visibility through innovative and impactful strategies. Harness cutting-edge technology to monitor and amplify local efforts with enterprise-level security and real-time support for sustainable growth.
                  </p>

            <Button size="lg" className="bg-green-600 text-white hover:bg-green-600/90">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-y border-white/10 bg-[#0F1115] py-12">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-2 gap-8 opacity-60 md:grid-cols-6">
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold">J-Hela</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold">Foundation</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold">Education</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold">Initiatives</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold">Solutions</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold">Empowerment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Empower Change Section */}
<section className="bg-[#0F1115] py-20">
  <div className="mx-auto max-w-[1200px] px-4">
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-white/10 bg-white/5 p-6">
        <CardContent className="space-y-4 p-0">
          <BarChart3 className="h-8 w-8 text-green-600" />
          <h3 className="text-lg font-semibold text-white/80">Inspire Local Visibility</h3>
          <p className="text-gray-400">Boost Kenyan businesses with actionable insights.</p>
        </CardContent>
      </Card>
      <Card className="border-white/10 bg-white/5 p-6">
        <CardContent className="space-y-4 p-0">
          <Users className="h-8 w-8 text-green-600" />
          <h3 className="text-lg font-semibold text-white/80">Strengthen Community</h3>
          <p className="text-gray-400">Foster teamwork to amplify societal impact.</p>
        </CardContent>
      </Card>
      <Card className="border-white/10 bg-white/5 p-6">
        <CardContent className="space-y-4 p-0">
          <LineChart className="h-8 w-8 text-green-600" />
          <h3 className="text-lg font-semibold text-white/80">Track Progress Goals</h3>
          <p className="text-gray-400">Monitor impact with real-time data insights.</p>
        </CardContent>
      </Card>
      <Card className="border-white/10 bg-white/5 p-6">
        <CardContent className="space-y-4 p-0">
          <PieChart className="h-8 w-8 text-green-600" />
          <h3 className="text-lg font-semibold text-white/80">Tailored Solutions</h3>
          <p className="text-gray-400">Receive actionable recommendations for greater impact.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


      {/* A Visionary Shift Section */}
<section className="bg-[#0F1115] py-14">
  <div className="mx-auto max-w-[1200px] px-4">
    <div className="mb-16 flex items-center gap-4">
      <Avatar className="h-12 w-12">
        <AvatarImage src="/authors/06.png" alt="Jane M. Otieno" />
        <AvatarFallback>JMO</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-xl font-bold">A visionary shift in societal impact</h3>
        <p className="text-sm text-gray-400">Jane M. Otieno, Community Engagement Lead</p>
      </div>
    </div>
    <p className="max-w-2xl text-lg text-gray-300">
      The Jungle Foundations innovative approach has redefined how we create positive societal change. By enabling seamless micropayments and fostering collaboration, we haveve seen communities thrive, businesses grow, and individual contributors take pride in making a real difference.
    </p>
  </div>
</section>


      {/* Your scalable SEO strategy Section */}
      <section className="bg-[#0F1115] py-24">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="space-y-32">
            {/* Support for Local Impact */}
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-2xl font-bold text-primary">Centralized Support for Noble Causes</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <Check className="mt-1 h-5 w-5 text-green-600" />
              <span>Streamlined contribution tracking for transparency</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-1 h-5 w-5 text-green-600" />
              <span>Advanced tagging system to monitor initiative progress</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-1 h-5 w-5 text-green-600" />
              <span>Consolidated data for informed decision-making</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-1 h-5 w-5 text-green-600" />
              <span>Empowering contributors through detailed reporting</span>
            </li>
          </ul>
          <Button className="mt-8 bg-green-600 text-white hover:bg-green-600/90">
            Join the Movement
          </Button>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <Image
            src="/jungle/non.jpg"
            alt="Centralized Support for Noble Causes"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      
            {/* Focus on high-impact moves */}
<div className="grid gap-16 md:grid-cols-2">
  <div className="order-2 md:order-1">
    <Image
      src="/jungle/main.jpg"
      alt="Empowering Social Impact with AI"
      width={600}
      height={400}
      className="rounded-lg"
    />
  </div>
  <div className="order-1 md:order-2">
    <h3 className="mb-6 text-2xl font-bold">
      Empowering Kenyan Communities
    </h3>
    <ul className="space-y-4">
      <li className="flex items-start gap-2">
        <Check className="mt-1 h-5 w-5 text-green-600" />
        <span>AI-driven insights tailored for societal growth</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="mt-1 h-5 w-5 text-green-600" />
        <span>Automated support for driving community initiatives</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="mt-1 h-5 w-5 text-green-600" />
        <span>Predictive strategies for maximum impact</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="mt-1 h-5 w-5 text-green-600" />
        <span>Automated support for driving community initiatives</span>
      </li>
    </ul>
    <Button className="mt-8 bg-green-600 text-white hover:bg-green-600/90">
      Join the Movement
    </Button>
  </div>
</div>

{/* Tailored SEO insights */}
<div className="grid gap-16 md:grid-cols-2">
  <div>
    <h3 className="mb-6 text-2xl font-bold">
      Tailored Insights to Drive Positive Change
    </h3>
    <ul className="space-y-4">
      <li className="flex items-start gap-2">
        <Check className="mt-1 h-5 w-5 text-green-600" />
        <span>Custom dashboards focused on societal metrics</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="mt-1 h-5 w-5 text-green-600" />
        <span>Real-time updates for transparent decision-making</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="mt-1 h-5 w-5 text-green-600" />
        <span>Advanced reporting to showcase community impact</span>
      </li><li className="flex items-start gap-2">
        <Check className="mt-1 h-5 w-5 text-green-600" />
        <span>Advanced reporting to showcase community impact</span>
      </li>
    </ul>
    <Button className="mt-8 bg-green-600 text-white hover:bg-green-600/90">
      Discover Our Tools
    </Button>
  </div>
  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
    <Image
      src="/jungle/non_profit.jpg"
      alt="Tailored Community Insights"
      width={600}
      height={400}
      className="rounded-lg"
    />
  </div>
</div>

          </div>
        </div>
      </section>

     {/* Stats Section */}
<section className="bg-[#0F1115] py-24">
  <div className="mx-auto max-w-[1200px] px-4">
    <div className="mb-16 flex items-center gap-4">
      <Avatar className="h-12 w-12">
        <AvatarImage src="/authors/07.webp" alt="John W. Kamau" />
        <AvatarFallback>JK</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-600">300%</span>
          <span className="text-2xl font-bold">increase in community engagement and</span>
          <span className="text-2xl font-bold text-green-600">50%</span>
          <span className="text-2xl font-bold">growth contributions</span>
        </div>
        <p className="text-sm text-gray-400">John W. Kamau, Program Manager</p>
      </div>
    </div>
    <p className="max-w-2xl text-lg text-gray-300">
      Through the Jungle Foundation platform, we have achieved an incredible 300% increase in community engagement and a 50% growth in donor contributions within just 6 months. This has enabled us to expand our reach and impact.
    </p>
  </div>
</section>

      {/* Contact Form */}
      <section className="relative bg-[#07080a] py-24">
        <Image
          src="/video/1.jpg"
          alt="Background Pattern"
          width={1920}
          height={1080}
          className="absolute bottom-0 left-0 right-0 z-0"
        />
        <div className="relative mx-auto max-w-[1200px] px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Ready to get started?</h2>
            <p className="text-green-600">Request demo now</p>
          </div>
          <div className="max-w-md space-y-4">
            <div>
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" className="mt-1.5 bg-white/5" />
            </div>
            <div>
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" className="mt-1.5 bg-white/5" />
            </div>
            <div>
              <Label htmlFor="email">Account Email</Label>
              <Input id="email" type="email" className="mt-1.5 bg-white/5" />
            </div>
            <div>
              <Label htmlFor="company">Location</Label>
              <Input id="company" className="mt-1.5 bg-white/5" />
            </div>
            <Button className="w-full bg-green-600 text-white hover:bg-green-600/90">
              Request Demo
            </Button>
            <p className="text-xs text-gray-400">
              I agree to Jungle Foundation Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="mx-auto max-w-[1200px]  border-t border-white/10 bg-[#0F1115] py-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-semibold">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    PowerCrawl
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    searchUnify
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Social</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 bg-[#0F1115] ">
           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
             <p className="text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Jungle Foundation. Powered by Jungle Initiative.
             </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/terms" className="hover:underline">Terms</Link>
              <Link href="/cookies" className="hover:underline">Cookies</Link>
             </div>
          </div>
        </div>
        </div>
      </footer>
    </div>
  )
}