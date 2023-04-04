import Head from "next/head";
import NavBar from "@/components/NavBar";
import { bio, facts } from "@/constants/bio";

export default function About() {
  return (
    <>
      <Head>
        <title>Hoang D. Nguyen | About</title>
        <meta name='description' content='About Hoang D. Nguyen' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <main>
        <NavBar />
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {bio.intro}
              </h2>
              <h5 className="mt-6 text-4xl font-bold tracking-tight text-pink-400 sm:text-1xl">{bio.title}</h5>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {bio.desc}
              </p>
              <dl className="mt-6 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {facts.map(fact => {
                  return (
                    <>
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <fact.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" />
                          {fact.label}:
                        </dt>
                        <dd className="inline px-2">{fact.value}</dd>
                      </div>
                    </>
                  )
                })}
              </dl>
            </div>
          </div>
        </div>
      </main >
    </>
  );
}