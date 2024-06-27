// components/Lectures.tsx
import React from 'react';

export default function Lectures() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">TOEFL Preparation Resources</h2>
                <p className="mt-4 text-gray-500">
                  Explore a range of TOEFL preparation resources including study guides, practice tests, and more to help you achieve your best score.
                </p>
              </header>
              <a
                href="#"
                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
              >
                Browse Resources
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="group block">
                  <img
                    src="https://www.dropbox.com/scl/fi/2kdlu9e0gfzn3tyc4c1jj/TOEFLStudyGuide.webp?rlkey=0paed4tbmg0i3krl536i7b0lj&raw=1"
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />
                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      TOEFL Study Guide
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">Free</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="group block">
                  <img
                    src="https://img.freepik.com/free-photo/3d-rendering-cartoon-like-boy-reading_23-2150797622.jpg?t=st=1719321935~exp=1719325535~hmac=baaf5649865cfac46bf09ede7a817968036938021ab0dc0ed8bef91bd00db79a&w=740"
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />
                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Get Study Plan
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">Free</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
