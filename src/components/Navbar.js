import React, { useState } from 'react';
import useGoto from 'hooks/useGoto';

export default function Navbar(props) {
  const goto = useGoto();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={
        (props.transparent
          ? 'top-0 absolute z-50 w-full'
          : 'relative shadow-lg bg-gray-700 shadow-lg') +
        ' flex flex-wrap items-center justify-between px-2 py-3 '
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent
                ? 'text-gray-800 lg:hover:text-gray-300'
                : 'text-white lg:hover:text-red-300') +
              ' text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap '
            }
            onClick={goto('/')}
          >
            MEWJI
            <p className="text-sm font-light">ux designer</p>
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? 'text-gray-800' : 'text-white') +
                ' fas fa-bars'
              }
            ></i>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none' +
            (navbarOpen ? ' block rounded ' : ' hidden')
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-white hover:text-gray-300') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-semibold'
                }
                onClick={goto('/AboutMe')}
                // target="_blank"
              >
                {/* <span className="lg:hidden inline-block ml-2">Share</span> */}
                About Me
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-white hover:text-gray-300') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-semibold'
                }
                href={require('assets/file/Interview_Questions.pdf').default}
                target="_blank"
              >
                {/* <span className="lg:hidden inline-block ml-2">Share</span> */}
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
