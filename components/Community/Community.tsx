"use client";
import { useEffect, useRef } from "react";

export default function AboutUs() {
  const barRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      let res = window.scrollY - 2600;
      if (!barRef.current) return;
      // const res = scrollPositions - 1600;
      if (res > 0) {
        //@ts-ignore
        barRef.current.style.transform = `scale(${1 - 9 * (res / 10000)})`;
      } else {
        //@ts-ignore
        barRef.current.style.transform = `scale(1)`;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[60rem]  overflow-hidden  w-full">
      <div
        //@ts-ignore
        ref={barRef}
        className="relative  h-full"
      >
        <svg
          className=" w-[65rem]  absolute top-[60%] left-[65%] -translate-x-[50%] -translate-y-[10%]"
          viewBox="0 0 630 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M601.805 224.672C593.685 235.068 585.046 244.558 576.786 254.365C569.107 263.483 559.313 264.9 548.335 264.047C534.061 262.936 519.757 262.377 505.424 262.222C496.671 262.128 489.089 264.752 481.926 269.33C460.436 283.062 438.228 295.576 416.06 308.157C407.321 313.117 397.981 315.527 387.893 315.488C355.897 315.367 323.9 315.372 291.904 315.385C276.786 315.391 263.895 308.99 251.267 301.647C239.884 295.029 228.553 288.311 217.804 280.713C204.055 270.995 189.017 269.286 172.624 270.881C155.296 272.567 137.947 275.494 120.384 273.55C114.9 272.943 110.177 270.878 105.76 267.68C78.6342 248.04 51.4733 228.45 24.3031 208.872C20.5194 206.145 16.7623 203.336 12.7455 200.988C2.76342 195.155 -0.950589 186.252 0.20267 175.248C1.2838 164.933 0.904453 154.613 1.20214 144.296C1.38462 137.972 1.68517 131.652 1.84484 125.327C1.89803 123.22 2.41588 121.4 3.97577 119.928C24.5711 100.5 43.998 79.8183 66.1026 62.0089C75.5328 54.4111 86.2261 48.9705 97.2188 44.1255C123.588 32.5035 150.097 21.1953 176.403 9.43331C190.835 2.98043 205.894 0.177636 221.541 0.153222C259.369 0.0941697 297.204 -0.254157 335.023 0.350823C359.349 0.740014 383.698 1.3406 407.989 0.702263C430.156 0.119713 450.777 4.9078 471.297 12.5096C497.839 22.3423 524.292 32.4773 551.287 41.0426C561.792 44.3756 569.379 51.279 576.163 59.5169C589.932 76.2363 603.333 93.2951 617.809 109.383C627.903 120.601 629.833 133.348 629.156 147.369C628.644 157.991 627.353 168.568 628.145 179.269C628.862 188.954 625.987 197.642 619.268 204.957C613.411 211.334 607.767 217.907 601.805 224.672Z"
            fill="white"
          ></path>
          <path
            d="M601.805 224.672C593.685 235.068 585.046 244.558 576.786 254.365C569.107 263.483 559.313 264.9 548.335 264.047C534.061 262.936 519.757 262.377 505.424 262.222C496.671 262.128 489.089 264.752 481.926 269.33C460.436 283.062 438.228 295.576 416.06 308.157C407.321 313.117 397.981 315.527 387.893 315.488C355.897 315.367 323.9 315.372 291.904 315.385C276.786 315.391 263.895 308.99 251.267 301.647C239.884 295.029 228.553 288.311 217.804 280.713C204.055 270.995 189.017 269.286 172.624 270.881C155.296 272.567 137.947 275.494 120.384 273.55C114.9 272.943 110.177 270.878 105.76 267.68C78.6342 248.04 51.4733 228.45 24.3031 208.872C20.5194 206.145 16.7623 203.336 12.7455 200.988C2.76342 195.155 -0.950589 186.252 0.20267 175.248C1.2838 164.933 0.904453 154.613 1.20214 144.296C1.38462 137.972 1.68517 131.652 1.84484 125.327C1.89803 123.22 2.41588 121.4 3.97577 119.928C24.5711 100.5 43.998 79.8183 66.1026 62.0089C75.5328 54.4111 86.2261 48.9705 97.2188 44.1255C123.588 32.5035 150.097 21.1953 176.403 9.43331C190.835 2.98043 205.894 0.177636 221.541 0.153222C259.369 0.0941697 297.204 -0.254157 335.023 0.350823C359.349 0.740014 383.698 1.3406 407.989 0.702263C430.156 0.119713 450.777 4.9078 471.297 12.5096C497.839 22.3423 524.292 32.4773 551.287 41.0426C561.792 44.3756 569.379 51.279 576.163 59.5169C589.932 76.2363 603.333 93.2951 617.809 109.383C627.903 120.601 629.833 133.348 629.156 147.369C628.644 157.991 627.353 168.568 628.145 179.269C628.862 188.954 625.987 197.642 619.268 204.957C613.411 211.334 607.767 217.907 601.805 224.672ZM257.75 9.48608C251.419 9.37527 245.043 9.71472 238.766 9.0747C213.383 6.4865 189.386 10.7087 166.673 22.4839C147.289 32.5336 127.316 41.2815 106.919 49.1087C95.4045 53.5269 84.1576 58.6968 74.4685 66.5574C52.6892 84.2265 33.0529 104.19 13.2686 123.992C10.3549 126.909 11.3556 129.147 14.0182 131.523C42.9618 157.348 75.4302 178.392 107.336 200.182C112.85 203.948 119.333 205.929 126.195 206.056C141.7 206.344 157.18 205.63 172.61 204.306C189.989 202.815 206.201 204.479 221.138 215.095C233.476 223.864 245.543 233.093 258.562 240.917C268.575 246.934 279.187 251.471 290.915 251.667C321.561 252.178 352.148 254.374 382.825 254.276C399.251 254.223 414.081 250.16 427.714 241.359C439.889 233.499 451.809 225.244 464.033 217.463C475.523 210.15 488.049 206.334 501.882 206.735C514.037 207.088 526.22 206.45 538.374 206.801C555.899 207.308 569.523 200.48 580.331 186.803C592.531 171.365 603.346 154.908 615.557 139.516C620.418 133.39 619.712 128.128 616.393 122.278C614.921 119.683 613.272 117.082 611.23 114.935C598.566 101.619 587.765 86.7976 576.405 72.4215C567.546 61.209 556.616 53.1591 542.772 48.4464C514.245 38.7351 486.001 28.1911 457.684 17.869C447.152 14.0299 436.533 10.6692 425.208 10.5868C369.722 10.1829 314.236 9.84731 257.75 9.48608ZM318.321 258.626C307.182 258.33 296.008 258.633 284.966 256.693C281.645 256.11 281.727 258.284 281.46 260.607C280.068 272.722 280.732 284.879 280.565 297.017C280.454 305.127 280.627 305.268 288.717 305.753C289.216 305.783 289.716 305.799 290.215 305.799C323.683 305.819 357.151 305.863 390.619 305.81C393.419 305.806 396.227 305.205 399.015 304.777C402.059 304.31 403.102 302.423 402.832 299.43C401.756 287.499 400.746 275.554 401.008 263.561C401.082 260.147 399.813 259.35 396.544 259.606C370.76 261.62 345 260.404 318.321 258.626ZM114.996 220.77C116.998 215.484 115.183 212.306 109.763 210.838C108.202 210.415 106.77 209.388 105.379 208.484C78.2738 190.883 52.828 171.026 27.5437 150.965C21.9952 146.562 16.9825 141.485 10.5875 135.689C10.5875 139.658 10.6192 142.401 10.5818 145.144C10.4569 154.293 10.9555 163.461 9.87328 172.582C8.71656 182.33 11.5148 190.186 20.1467 195.661C27.7303 200.471 35.228 205.436 42.5527 210.631C64.5421 226.225 86.4202 241.976 108.376 257.617C109.615 258.5 110.679 260.099 112.614 259.536C113.396 246.847 114.174 234.247 114.996 220.77ZM121.447 217.183C120.402 231.12 119.559 245.077 118.182 258.981C117.792 262.909 119.309 263.784 122.433 263.76C129.261 263.708 136.093 263.687 142.914 263.414C158.883 262.774 174.841 261.817 190.815 261.352C197.335 261.163 197.436 261.59 197.317 255.041C197.091 242.54 197.64 230.064 198.607 217.613C199.021 212.27 198.672 211.237 193.152 211.545C183.523 212.082 173.918 213.063 164.307 213.907C152.875 214.912 141.522 216.839 129.97 216.44C127.265 216.346 124.487 214.397 121.447 217.183ZM233.063 279.773C246.679 287.49 259.381 296.922 275.098 302.88C274.285 287.38 275.666 272.987 275.98 258.555C276.05 255.321 274.086 254.315 271.608 253.395C263.154 250.258 255.155 246.165 247.552 241.351C235.184 233.521 222.934 225.505 210.59 217.636C208.707 216.435 206.999 214.66 204.165 214.817C204.798 230.169 205.219 245.411 202.815 260.554C202.469 262.734 204.036 263.408 205.625 264.063C215.223 268.02 223.723 273.903 233.063 279.773ZM408.359 286.601C408.803 291.352 406.789 296.078 407.937 300.777C409.663 301.331 410.809 300.529 411.927 299.865C434.701 286.348 457.872 273.497 480.17 259.177C482.452 257.712 483.186 256.011 483.147 253.423C482.984 242.593 482.996 231.762 482.892 220.931C482.879 219.522 483.424 217.872 481.419 216.636C472.598 219.586 464.388 224.257 456.334 229.271C440.816 238.932 426.508 250.679 408.931 256.796C406.727 257.563 406.7 259.208 406.85 261.236C407.453 269.367 407.875 277.511 408.359 286.601ZM513.702 211.453C506.513 211.217 499.436 212.166 492.397 213.49C490.531 213.841 488.683 214.365 488.677 216.756C488.646 229.03 488.662 241.304 488.662 254.26C505.279 249.663 521.438 253.146 537.614 253.834C543.754 254.096 549.833 255.32 556.024 254.857C558.633 254.662 560.128 253.893 559.667 250.913C558.234 241.649 559.246 232.31 558.901 223.011C558.774 219.598 558.59 216.188 558.411 212.301C552.11 213.199 546.319 213.568 540.524 213.211C531.898 212.68 523.278 212.046 513.702 211.453ZM565.035 224.202C563.606 235.154 564.269 247.499 566.525 250.386C567.061 250.04 567.71 249.782 568.139 249.32C584.906 231.261 600.365 212.087 616.033 193.092C617.702 191.069 618.022 188.612 617.976 186.033C617.748 173.3 618.952 160.618 619.522 147.308C617.024 151.061 614.857 154.368 612.64 157.642C601.532 174.044 591.141 191.293 575.266 203.471C568.002 209.043 564.197 214.436 565.035 224.202Z"
            fill="black"
          ></path>
        </svg>

        <div className="w-[60rem]  absolute top-[60%] left-[65%] -translate-x-[50%] -translate-y-[10%] ">
          <p className="px-56 py-16">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            facilis sit sapiente accusantium, tenetur quam velit incidunt iste
            unde asperiores ipsum quis saepe ex facere quia maiores laudantium
            magni minima?
          </p>
        </div>
      </div>
    </div>
  );
}
