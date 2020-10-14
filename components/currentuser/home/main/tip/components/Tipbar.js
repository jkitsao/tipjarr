import React from "react";
import Link from "next/link";
function Tipbar() {
  return (
    <div className="w-full flex items-center h-full">
      <section className="flex justfy-between px-3">
        <div>
          <Link href="/home">
            <a>
              <img
                src="https://img.icons8.com/flat_round/452/home--v1.png"
                alt=""
                className="w-10 h-10 object-cover cursor-pointer hover:border-green-500 hover:border-6 border-2 rounded-full"
                title="home"
              />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/home">
            <a>
              <img
                src="https://img.icons8.com/flat_round/452/home--v1.png"
                alt=""
                className="w-10 h-10 object-cover cursor-pointer hover:border-green-500 hover:border-6 border-2 rounded-full"
                title="home"
              />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/home">
            <a>
              <img
                src="https://img.icons8.com/flat_round/452/home--v1.png"
                alt=""
                className="w-10 h-10 object-cover cursor-pointer hover:border-green-500 hover:border-6 border-2 rounded-full"
                title="home"
              />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Tipbar;
