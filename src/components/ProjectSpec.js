/* eslint-disable @next/next/no-img-element */

export default function ProjectSpec({ project }) {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{project.name}</h2>
          <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {project.desc.map(feature => {
              return (
                <div key={project.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              )
            })}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={`/${project.img}.png`}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"

          />
          <img
            src={`/${project.img}1.png`}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}
