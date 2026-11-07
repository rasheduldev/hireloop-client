import Image from "next/image"
import Link from "next/link"
import {
  BriefcaseBusinessIcon,
  Building2Icon,
  MapPinIcon,
  SearchIcon,
  StarIcon,
  UserRoundSearchIcon,
} from "lucide-react"

import globe from "@/app/images/globe.png"

const trendingPositions = ["Product Designer", "AI Engineering", "Dev-ops Engineer"]

const stats = [
  { icon: BriefcaseBusinessIcon, value: "50K", label: "Active Jobs" },
  { icon: Building2Icon, value: "12K", label: "Companies" },
  { icon: UserRoundSearchIcon, value: "2M", label: "Job Seekers" },
  { icon: StarIcon, value: "97%", label: "Satisfaction Rate" },
]

export function Banner() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0c] text-white">
      {/* Soft radial glow at the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_35%_at_50%_0%,rgba(99,102,241,0.15)_0%,transparent_70%)]"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 text-center sm:px-6 sm:pt-16">
        {/* Badge matching the UI */}
        <div className="flex items-center justify-center gap-3">
          <span
            aria-hidden
            className="hidden h-px w-16 bg-gradient-to-r from-transparent via-indigo-500/30 to-indigo-500/60 sm:block"
          />
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161619] px-3.5 py-1.5 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]">
            <span className="grid size-5 place-items-center rounded-full bg-indigo-500/20 text-xs text-indigo-400">
              💼
            </span>
            <span className="text-xs font-medium text-white sm:text-sm">50,000+</span>
            <span className="text-[11px] tracking-wider text-gray-400 uppercase">
              NEW JOBS THIS MONTH
            </span>
          </div>
          <span
            aria-hidden
            className="hidden h-px w-16 bg-gradient-to-l from-transparent via-indigo-500/30 to-indigo-500/60 sm:block"
          />
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:mt-8 sm:text-6xl">
          Find Your Dream Job Today
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:mt-5 sm:text-base">
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and land your next role — faster.
        </p>

        {/* Search bar matching the screenshot layout and styling */}
        <form
          action="/jobs"
          className="mx-auto mt-8 flex max-w-3xl flex-col gap-2 rounded-2xl border border-white/10 bg-[#141416]/90 p-2 shadow-2xl backdrop-blur-md sm:mt-10 sm:flex-row sm:items-center sm:gap-0 sm:p-2.5"
        >
          <label className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2">
            <SearchIcon className="size-4 shrink-0 text-gray-400" />
            <input
              type="text"
              name="q"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
          </label>
          <span aria-hidden className="mx-2 hidden h-6 w-px bg-white/10 sm:block" />
          <label className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2 max-sm:border-t max-sm:border-white/10 max-sm:pt-3">
            <MapPinIcon className="size-4 shrink-0 text-gray-400" />
            <input
              type="text"
              name="location"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
          </label>
          <button
            type="submit"
            aria-label="Search"
            className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 sm:mt-0 sm:size-12 sm:w-auto sm:shrink-0 sm:p-0"
          >
            <SearchIcon className="size-4" />
            <span className="sr-only sm:not-sr-only">Search</span>
          </button>
        </form>

        {/* Trending positions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <span className="text-sm text-gray-400">Trending Position</span>
          {trendingPositions.map((position) => (
            <Link
              key={position}
              href={`/jobs?q=${encodeURIComponent(position)}`}
              className="rounded-lg border border-white/10 bg-[#1c1c1f] px-3 py-1 text-xs text-gray-300 transition-colors hover:border-white/20 hover:text-white"
            >
              {position}
            </Link>
          ))}
        </div>
      </div>

      {/* Globe section */}
      <div className="relative mt-12 sm:mt-16">
        {/* Globe backdrop image */}
        <div className="flex justify-center overflow-hidden">
          <Image
            src={globe}
            alt=""
            aria-hidden
            className="pointer-events-none w-[900px] max-w-none opacity-80 sm:w-[1300px]"
          />
        </div>

        {/* Overlay message on top of the globe curve */}
        <div className="absolute inset-x-0 top-32 z-10 px-4 text-center sm:top-48">
          <h2 className="mx-auto max-w-xl text-xl font-medium tracking-tight text-white sm:text-3xl">
            Assisting over 15,000 job seekers find their dream positions.
          </h2>
        </div>

        {/* Stats cards grid */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex h-36 flex-col justify-between rounded-2xl border border-white/10 bg-[#141416]/80 p-5 backdrop-blur-md sm:h-40 sm:p-6"
              >
                <stat.icon className="size-5 text-gray-400" aria-hidden />
                <div>
                  <dd className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs text-gray-400 sm:text-sm">
                    {stat.label}
                  </dt>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}