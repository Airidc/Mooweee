import React, { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <div className="footer">
      <p>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </p>
      <p>
        Source code can be found on{" "}
        <a href="https://github.com/Airidc/Mooweee" target="blank">
          Github
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.88 3.099C20.147 2.366 19.265 2 18.233 2H5.746C4.714 2 3.832 2.366 3.099 3.099C2.366 3.832 2 4.714 2 5.746V18.233C2 19.265 2.366 20.147 3.099 20.88C3.832 21.613 4.714 21.979 5.746 21.979H8.66C8.85 21.979 8.993 21.972 9.089 21.959C9.20069 21.9366 9.30151 21.877 9.375 21.79C9.47 21.69 9.518 21.545 9.518 21.355L9.511 20.47C9.507 19.906 9.505 19.46 9.505 19.13L9.205 19.182C9.015 19.217 8.775 19.232 8.484 19.228C8.18069 19.2224 7.87834 19.192 7.58 19.137C7.2624 19.0784 6.96343 18.9446 6.708 18.747C6.44049 18.5446 6.24097 18.2656 6.136 17.947L6.006 17.647C5.89643 17.4104 5.75877 17.1877 5.596 16.984C5.41 16.741 5.221 16.577 5.03 16.49L4.94 16.425C4.87724 16.3801 4.82016 16.3277 4.77 16.269C4.72209 16.2145 4.68265 16.1532 4.653 16.087C4.627 16.026 4.649 15.976 4.718 15.937C4.788 15.897 4.913 15.878 5.096 15.878L5.356 15.918C5.529 15.952 5.744 16.056 5.999 16.229C6.25706 16.4049 6.47263 16.6362 6.63 16.906C6.83 17.261 7.07 17.532 7.352 17.719C7.634 17.905 7.918 17.999 8.204 17.999C8.49 17.999 8.737 17.977 8.946 17.934C9.14811 17.8922 9.34451 17.8264 9.531 17.738C9.609 17.158 9.821 16.71 10.168 16.398C9.71838 16.3539 9.27276 16.2757 8.835 16.164C8.40779 16.0466 7.99694 15.8763 7.612 15.657C7.20924 15.4377 6.8535 15.1414 6.565 14.785C6.288 14.438 6.06 13.983 5.882 13.42C5.705 12.856 5.616 12.205 5.616 11.468C5.616 10.419 5.958 9.526 6.643 8.788C6.323 8 6.353 7.115 6.734 6.136C6.986 6.057 7.359 6.116 7.853 6.311C8.347 6.506 8.709 6.673 8.939 6.811C9.169 6.951 9.353 7.068 9.492 7.163C10.305 6.93675 11.1451 6.82303 11.989 6.825C12.848 6.825 13.68 6.938 14.487 7.163L14.981 6.851C15.361 6.62285 15.7618 6.43133 16.178 6.279C16.638 6.105 16.988 6.058 17.232 6.136C17.622 7.116 17.656 8 17.335 8.789C18.02 9.526 18.363 10.419 18.363 11.469C18.363 12.206 18.274 12.859 18.096 13.426C17.919 13.994 17.689 14.449 17.407 14.792C17.1134 15.1439 16.7562 15.4373 16.354 15.657C15.934 15.891 15.526 16.06 15.131 16.164C14.6933 16.2761 14.2477 16.3546 13.798 16.399C14.248 16.789 14.474 17.404 14.474 18.245V21.355C14.474 21.502 14.495 21.621 14.539 21.712C14.5592 21.7558 14.5881 21.7952 14.6238 21.8276C14.6595 21.8601 14.7014 21.8851 14.747 21.901C14.843 21.935 14.927 21.957 15.001 21.965C15.075 21.975 15.181 21.978 15.319 21.978H18.233C19.265 21.978 20.147 21.612 20.88 20.879C21.612 20.147 21.979 19.264 21.979 18.232V5.746C21.979 4.714 21.612 3.832 20.879 3.099H20.88Z"
              fill="black"
            />
          </svg>
        </a>
      </p>
    </div>
  );
}
