import * as React from "react"
import Svg, { Defs, RadialGradient, Stop, Path, G } from "react-native-svg"

function PizzaSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      viewBox="0, 0, 1616, 1216"
      {...props}
    >
      <Defs>
        <RadialGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          cx={1095.198}
          cy={333}
          r={175}
        >
          <Stop offset={0} stopColor="#FFF" />
          <Stop offset={1} stopColor="#DA9346" />
        </RadialGradient>
        <RadialGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          cx={800.074}
          cy={688.213}
          r={518.75}
        >
          <Stop offset={0} stopColor="#FFF" />
          <Stop offset={1} stopColor="#DA9346" />
        </RadialGradient>
      </Defs>
      <Path
        d="M618.583 801.833h-4.167c-9.906 0-19.515 3.983-26.516 10.983a37.65 37.65 0 00-10.984 26.517 37.645 37.645 0 0010.984 26.516c7.001 7.001 16.61 10.984 26.516 10.984h4.167a37.65 37.65 0 0026.517-10.984c7-7 10.983-16.61 10.983-26.516 0-9.906-3.983-19.516-10.983-26.517-7.001-7-16.611-10.983-26.517-10.983"
        fill="#EA210C"
      />
      <Path
        d="M879.407 522.583c0-19.481-1.411-55.997-2.775-91.31-1.371-35.502-2.79-72.212-2.79-92.081 0-19.396-1.052-38.2-2.069-56.385-1.031-18.458-2.098-37.546-2.098-57.5 0-20.167 1.406-25.052 3.551-30.203.898-2.154 2.015-4.836 2.015-22.512v-.102c0-5.456 4.414-9.883 9.87-9.9l2.213-.007c46.019 0 91.691 4.242 135.75 12.609l8.501 1.609c41.15 7.777 83.702 15.818 120.284 30.689 38.62 15.7 74.443 34.892 106.477 57.044 16.347 11.305 31.829 23.481 46.014 36.193 9.786 8.769 19.137 17.957 27.792 27.309l.097.105c4.641 5.014 2.928 13.11-7.512 15.815L889.06 531.826c-2.368 2.818-9.653-1.974-9.653-9.091z"
        fill="#FFDD8A"
      />
      <Path
        d="M875.074 158.01c0 39.35-5.566 13.363-5.566 52.713 0 39.352 4.167 74.536 4.167 113.886 0 39.351 5.566 144.04 5.566 183.391l122.375-52.772 122.375-52.771 122.376-52.772c17.335-7.475 40.92-17.034 58.256-24.509l16.264-7.014c-8.495-9.178-17.549-18.071-27.127-26.654-13.936-12.487-35.231-22.234-51.279-33.332-31.299-21.643-66.412-40.5-104.554-56.005-38.142-15.505-83.478-23.494-126.885-31.737C968.331 162.323 923.452 158 877.157 158c-.695 0-1.389.008-2.083.01z"
        fill="url(#a)"
      />
      <Path
        d="M896.322 278.499l41.166 6.279 21.563 3.29c5.972.911 12.127 1.466 17.833 3.552l-8.958-3.78a26.3 26.3 0 013.765 2.02l-7.589-5.863a19.634 19.634 0 012.964 2.857l-5.864-7.59c.996 1.417 1.78 2.859 2.492 4.436l-3.781-8.958c4.623 11.406 7.809 22.29 16.851 31.264 9.452 9.38 20.633 11.641 33.323 11.839a653.91 653.91 0 0115.529.451c20.052.792 40.058 2.599 59.95 5.233l-9.969-1.34a678.825 678.825 0 0149.735 8.626c15.498 3.285 31.229 6.721 45.897 12.835l-8.958-3.781c6.658 2.899 12.905 6.389 18.659 10.833l-7.589-5.864.666.671-5.864-7.589c.413.531.733 1.114.959 1.748l-3.78-8.958c.225.607.358 1.234.399 1.88l-1.34-9.969-.034.838 1.339-9.969-.203.687 9.644-16.547-.381.476 16.548-9.644-.569.205h19.938l-.765-.13c-10.341-1.744-19.532-1.705-28.896 3.781-8.383 4.91-14.656 13.037-17.234 22.411-2.662 9.679-1.293 20.235 3.781 28.896 4.497 7.678 13.287 15.694 22.411 17.233 7.416 1.252 13.889 2.577 21.272-.075 9.679-3.476 17.529-8.725 22.792-17.71 7.867-13.429 5.876-27.834-.161-41.259-3.803-8.455-11.808-13.738-19.112-18.834-3.636-2.538-7.582-4.612-11.579-6.514-20.223-9.626-41.783-14.673-63.604-19.163-44.424-9.142-89.953-14.094-135.306-14.531l26.516 10.983a17.125 17.125 0 01-2.633-2.593l5.864 7.59c-.958-1.395-1.708-2.815-2.39-4.363l3.78 8.958c-4.607-11.601-7.959-24.24-18.264-32.383-7.717-6.099-14.775-10.457-24.503-12.957-4.441-1.141-9.119-1.57-13.643-2.26l-62.729-9.569c-10.432-1.591-19.425-1.768-28.896 3.78-8.383 4.911-14.655 13.038-17.233 22.412-2.663 9.679-1.293 20.235 3.78 28.896 4.434 7.569 13.335 15.849 22.411 17.233"
        fill="#EA210C"
      />
      <Path
        d="M1191.741 362.167c-14.619-12.995-20.987-35.417-46.875-35.417-7.564 0-14.703 1.362-21.029 3.766-8.114-38.674-55.301-68.349-112.304-68.349-25.956 0-49.872 6.157-68.996 16.51l-77.429-44.473 12.72 151.04-8.561 138.351 155.934-77.608-1.944-1.289 116.904-45.812a31.124 31.124 0 004.705-1.302c34.375-12.5 65.625-18.75 46.875-35.417"
        fill="#F4ED76"
      />
      <Path
        d="M933.407 484.042c0 51.201-14.457 92.708-32.292 92.708-17.834 0-32.291-41.507-32.291-92.708s14.457-92.708 32.291-92.708c17.835 0 32.292 41.507 32.292 92.708"
        fill="#F4ED76"
      />
      <Path
        d="M979.241 491.333c0 20.711-12.126 37.5-27.083 37.5-14.958 0-27.084-16.789-27.084-37.5s12.126-37.5 27.084-37.5c14.957 0 27.083 16.789 27.083 37.5"
        fill="#F4ED76"
      />
      <Path
        d="M978.192 464.323c-19.217 0-37.373-4.733-51.124-13.327-14.665-9.165-22.74-21.659-22.74-35.178 0-13.521 8.075-26.013 22.74-35.179 13.751-8.595 31.907-13.328 51.124-13.328 19.217 0 37.374 4.733 51.124 13.328 14.665 9.166 22.741 21.658 22.741 35.179 0 13.519-8.076 26.013-22.741 35.178-13.75 8.594-31.907 13.327-51.124 13.327"
        fill="#C6093F"
      />
      <Path
        d="M1045.815 408.951c0 23.342-30.276 42.264-67.622 42.264-37.347 0-67.623-18.922-67.623-42.264 0-23.342 30.276-42.264 67.623-42.264 37.346 0 67.622 18.922 67.622 42.264"
        fill="#EA1145"
      />
      <Path
        d="M987.744 400.863c0 5.092-6.605 9.221-14.753 9.221s-14.753-4.129-14.753-9.221c0-5.092 6.605-9.221 14.753-9.221s14.753 4.129 14.753 9.221M991.488 432.073c0 6.385-8.281 11.561-18.497 11.561s-18.497-5.176-18.497-11.561 8.281-11.561 18.497-11.561 18.497 5.176 18.497 11.561M1020.612 430.773c0 3.869-5.019 7.006-11.209 7.006-6.191 0-11.21-3.137-11.21-7.006s5.019-7.006 11.21-7.006c6.19 0 11.209 3.137 11.209 7.006M966.189 378.755c0 3.039-3.941 5.502-8.803 5.502-4.862 0-8.804-2.463-8.804-5.502 0-3.039 3.942-5.502 8.804-5.502s8.803 2.463 8.803 5.502M1037.832 407.365c0 3.978-5.159 7.203-11.524 7.203-6.364 0-11.524-3.225-11.524-7.203s5.16-7.203 11.524-7.203c6.365 0 11.524 3.225 11.524 7.203M949.296 420.56c0 4.477-5.807 8.106-12.97 8.106s-12.97-3.629-12.97-8.106 5.807-8.106 12.97-8.106 12.97 3.629 12.97 8.106M1024.514 383.957c0 5.665-7.348 10.257-16.412 10.257s-16.412-4.592-16.412-10.257 7.348-10.257 16.412-10.257 16.412 4.592 16.412 10.257"
        fill="#F9F7F8"
      />
      <Path
        d="M928.212 275.437c-9.989 0-18.427 5.969-18.427 13.034 0 1.841.56 3.635 1.665 5.332l3.536 5.432-5.984 2.49c-7.568 3.15-12.269 8.969-12.269 15.188 0 9.645 10.853 17.493 24.192 17.493 7.322 0 14.193-2.41 18.85-6.612l3.462-3.123 3.591 2.972c4.652 3.852 11.311 6.061 18.27 6.061 13.409 0 24.319-7.891 24.319-17.592 0-5.238-3.272-10.191-8.977-13.588l-6.062-3.609 5.074-4.903c1.63-1.576 3.574-4.177 3.574-7.627 0-7.065-8.439-13.033-18.427-13.033-6.16 0-11.909 2.222-15.381 5.945l-3.398 3.642-3.901-3.098c-3.524-2.799-8.52-4.404-13.707-4.404m-12.824 78.736c-11.067 0-21.526-3.376-29.45-9.507-8.335-6.447-12.925-15.146-12.925-24.495 0-11.134 6.648-21.356 17.682-27.672a23.638 23.638 0 01-1.368-7.88c0-15.675 15.777-28.427 35.169-28.427 7.602 0 14.841 1.927 20.839 5.492 6.521-5.19 15.256-8.099 24.644-8.099 19.393 0 35.169 12.752 35.169 28.427 0 4.668-1.415 9.238-4.063 13.305 7.727 6.317 12.053 14.76 12.053 23.854 0 9.381-4.607 18.111-12.972 24.582-7.955 6.154-18.454 9.543-29.563 9.543-10.004 0-19.429-2.717-27.005-7.721-7.711 5.504-17.75 8.598-28.21 8.598"
        fill="#390"
      />
      <Path
        d="M963.974 332.356c-8.569 0-16.286-2.81-21.709-7.3-5.426 4.896-13.474 8.002-22.464 8.002-16.339 0-29.585-10.247-29.585-22.887 0-8.723 6.31-16.305 15.59-20.167-1.62-2.489-2.538-5.298-2.538-8.275 0-10.177 10.665-18.427 23.82-18.427 6.692 0 12.735 2.137 17.062 5.574 4.326-4.638 11.367-7.659 19.325-7.659 13.155 0 23.82 8.25 23.82 18.427 0 4.353-1.956 8.351-5.219 11.505 7.058 4.202 11.611 10.799 11.611 18.222 0 12.694-13.303 22.985-29.713 22.985m28.133-42.705c4.079-3.941 6.524-8.939 6.524-14.381 0-12.721-13.331-23.034-29.775-23.034-9.947 0-18.749 3.778-24.157 9.575-5.408-4.296-12.962-6.968-21.327-6.968-16.444 0-29.775 10.313-29.775 23.034 0 3.721 1.147 7.233 3.173 10.344-11.601 4.828-19.488 14.304-19.488 25.208 0 15.801 16.557 28.609 36.982 28.609 11.237 0 21.296-3.882 28.079-10.002 6.779 5.612 16.425 9.125 27.137 9.125 20.512 0 37.141-12.864 37.141-28.732 0-9.279-5.691-17.525-14.514-22.778"
        fill="#72EF43"
      />
      <Path
        d="M1077.29 396.333l5.675-22.071c-19.521-6.231-30.969-16.622-30.969-28.428 0-9.904 8.037-18.886 22.632-25.292 13.103-5.75 30.368-8.917 48.615-8.917 18.248 0 35.513 3.167 48.615 8.917 14.595 6.406 22.633 15.388 22.633 25.292 0 12.075-11.823 22.573-31.996 28.755l7.286 21.744z"
        fill="#D8A235"
      />
      <Path
        d="M1187.483 339.82c0-15.571-28.761-28.194-64.24-28.194-35.478 0-64.24 12.623-64.24 28.194 0 10.444 12.94 19.561 32.166 24.433l-5.156 20.051h74.46l-6.599-19.695c20.02-4.775 33.609-14.086 33.609-24.789"
        fill="#F4BD42"
      />
      <Path
        d="M1085.34 356.562c4.747-3.604 10.164-5.497 16.117-5.729 4.172-.163 4.188-6.656 0-6.492-7.02.273-13.765 2.341-19.394 6.615-3.288 2.497-.06 8.139 3.277 5.606M1136.525 349.925c8.271-.535 16.052 1.228 23.062 5.708 3.539 2.262 6.792-3.36 3.276-5.606-7.885-5.04-17.024-7.197-26.338-6.594-4.156.269-4.182 6.763 0 6.492"
        fill="#D19A2C"
      />
      <Path
        d="M779.731 318.702C626.328 322.919 490.009 374.62 398.88 453.77c-48.324 41.973-83.939 91.662-102.656 146.084-9.737 28.311-14.9 57.903-14.9 88.354 0 29.664 4.899 58.511 14.153 86.156 18.508 55.283 54.43 105.751 103.407 148.288 63.424 55.088 148.74 96.88 246.469 118.62 48.865 10.87 100.833 16.728 154.721 16.728 52.218 0 102.635-5.5 150.171-15.731 99.632-21.446 186.612-63.675 251.019-119.617 44.781-38.895 78.65-84.419 98.271-134.192 12.568-31.882 19.289-65.507 19.289-100.252 0-20.786-2.406-41.173-7.031-61.024-12.091-51.901-39.345-100.15-78.406-142.355-129.563 55.87-259.125 111.741-388.688 167.613l-46.709 20.141V318.426c-6.112.017-12.198.109-18.259.276z"
        fill="url(#b)"
      />
      <G>
        <Path
          d="M627.223 956.909c64.372 15.039 131.367 17.199 197.202 18.74 31.686.741 63.526-.562 94.611-7.246 16.548-3.558 32.432-9.651 47.669-16.96 13.034-6.253 24.85-14.727 36.713-22.906 11.482-7.917 23.159-15.481 36.009-21.007l-8.958 3.78c19.536-8.107 40.413-12.056 60.346-18.99 19.974-6.948 39.047-16.462 55.905-29.265 19.254-14.621 35.034-30.734 49.156-50.43 7.079-9.873 14.025-21.153 16.989-32.982 1.211-4.834 1.933-10.016 1.527-15.011-.814-10.025-2.55-14.065-6.514-23.322-1.855-4.331-5.253-7.888-7.315-12.139l3.78 8.958a31.844 31.844 0 01-2.045-7.37l1.34 9.969a38.829 38.829 0 01.009-7.668l-1.34 9.969c.596-4.268 1.769-8.285 3.38-12.277l-3.781 8.958c3.089-7.07 7.367-13.253 12.058-19.341l-5.864 7.59c5.015-6.449 10.131-12.826 14.937-19.434 5.208-7.161 8.678-14.804 11.972-23.036 6.08-15.194 5.471-32.147 4.605-48.183l-4.703-87.071c-1.102-20.405-16.224-37.5-37.5-37.5-19.607 0-38.603 17.071-37.5 37.5l3.1 57.388 1.496 27.704c.51 9.446 1.253 18.904.071 28.328l1.339-9.969c-.652 4.109-1.683 8.002-3.229 11.865l3.78-8.958c-3.095 7.062-7.48 13.284-12.158 19.374l5.863-7.589c-12.239 15.772-24.194 30.284-29.347 50.07-3.118 11.974-3.175 24.787.108 36.723 1.535 5.58 4.098 11.064 7.162 15.986 1.956 3.142 4.16 5.994 5.627 9.421l-3.78-8.958c.371.965.633 1.959.789 2.981l-1.34-9.969c.161 1.122.183 2.247.067 3.374l1.339-9.969c-.353 2.316-.985 4.383-1.871 6.55l3.78-8.958c-4.042 8.608-9.565 16.618-15.305 24.172l5.864-7.59a178.591 178.591 0 01-31.989 31.948l7.589-5.864c-11.654 8.851-24.266 16.213-37.737 21.938l8.958-3.78c-13.108 5.426-26.808 9.033-40.444 12.848-16.392 4.584-32.486 10.197-47.666 17.985-24.712 12.679-45.208 31.966-70.935 42.931l8.958-3.781c-15.866 6.561-32.51 10.555-49.49 12.904l9.969-1.34c-32.648 4.295-65.654 2.786-98.455 1.614-35.936-1.285-71.901-2.955-107.57-7.735l9.969 1.339c-15.879-2.18-31.652-4.983-47.262-8.63-19.888-4.646-40.554 5.921-46.129 26.192-5.258 19.113 6.288 41.479 26.191 46.129"
          fill="#EA210C"
        />
        <Path
          d="M746.448 326.833c-18.432 3.761-36.716 11.829-51.857 23.008-8.79 6.49-17.131 13.248-24.341 21.469-7.221 8.235-12.74 17.384-19.112 26.172l5.864-7.59c-1.275 1.591-2.59 2.958-4.184 4.23l7.59-5.863a25.237 25.237 0 01-4.043 2.147l8.958-3.78c-1.979.672-3.935 1.129-5.996 1.473l9.969-1.34c-14.912 1.951-30.018 2.549-44.96 4.402-18.036 2.236-36.007 4.884-53.782 8.696-31.077 6.667-61.442 17.386-89.651 32.067-25.519 13.28-49.543 31.149-69.136 52.231-23.307 25.081-38.97 54.336-50.462 86.405-9.18 25.618-15.565 52.42-18.246 79.504-2.327 23.499 1.218 48.433 8.559 70.795 8.381 25.533 21.694 48.157 39.298 68.38 14.9 17.117 34.597 29.268 48.649 47.21l-5.864-7.59c7.978 10.456 14.442 21.954 22.308 32.489 12.023 16.103 25.56 29.301 43.692 38.512 14.152 7.189 29.167 12.903 43.737 19.183l47.45 20.45c9.711 4.185 18.25 6.708 28.896 3.78 9.374-2.579 17.501-8.851 22.411-17.234 5.074-8.66 6.443-19.217 3.781-28.896-2.314-8.411-8.834-18.79-17.234-22.411l-54.75-23.596c-17.331-7.469-36.268-13.79-51.472-25.236l7.59 5.863c-5.384-4.28-10.011-9.217-14.255-14.618l5.864 7.59c-13.346-17.439-23.503-36.855-39.12-52.599-14.697-14.816-31.751-26.653-44.681-43.252l5.863 7.589c-8.017-10.524-14.594-21.95-19.738-34.137l3.78 8.958a158.874 158.874 0 01-10.349-38.066l1.34 9.969c-1.772-13.519-1.705-27.028.11-40.538l-1.339 9.969c3.822-26.304 11.618-52.793 21.923-77.273l-3.78 8.958c6.548-15.233 14.643-29.59 24.775-42.732l-5.863 7.589c10.396-13.246 22.439-24.982 35.704-35.337l-7.589 5.863c17.208-13.238 36.112-23.973 56.066-32.491l-8.958 3.781c31.57-13.264 65.084-20.825 98.926-25.447l-9.969 1.34c16.273-2.17 32.607-3.219 48.921-4.916 15.606-1.624 28.709-5.692 40.357-16.765 7.039-6.693 11.379-15.998 17.19-23.702l-5.864 7.589c5.66-7.277 12.135-13.738 19.393-19.421l-7.59 5.863a113.518 113.518 0 0123.694-13.872l-8.958 3.781a110.634 110.634 0 0120.423-6.282c20.037-4.088 31.332-27.441 26.191-46.13-2.578-9.373-8.85-17.5-17.233-22.411-9.131-5.348-18.765-5.847-28.896-3.78"
          fill="#EA210C"
        />
        <Path
          d="M1212.503 634.834l-11.084-91.495c13.357-33.813-20.148-54.808-62.187-18.225L803.889 667.212a19.239 19.239 0 00-5.981 4.011v-247.17c16.666-38.97-14.584-55.636-39.584-36.886l-85.416 18.75c-12.882 0-37.867 24.593-49.714 41.233a215.239 215.239 0 00-15.849-.588c-89.746 0-162.5 55.498-162.5 123.959 0 3.12.155 6.212.452 9.274-34.614 22.733-56.535 56.4-56.535 93.976 0 53.202 43.942 98.57 105.648 116.153C500.381 854.238 570.661 905 656.491 905c27.88 0 54.117-5.359 77.046-14.796 29.538 23.254 70.905 37.713 116.704 37.713 64.545 0 120.3-28.707 146.524-70.296 4.912.341 9.884.525 14.914.525 89.746 0 162.5-55.498 162.5-123.959 0-6.862-.743-13.59-2.149-20.149 15.502-13.942 46.747-64.398 40.473-79.204"
          fill="#F4ED76"
        />
        <Path
          d="M846.882 916.483c-2.262 10.812-12.86 17.743-23.672 15.481l-156.609-32.762c-10.812-2.262-17.743-12.86-15.481-23.672l6.312-30.18c2.263-10.811 12.861-17.743 23.672-15.481l156.611 32.762c10.811 2.262 17.742 12.86 15.48 23.672z"
          fill="#F4ED76"
        />
        <Path
          d="M416.535 681.069l9.898-20.527c-17.917-9.943-27.103-22.379-24.785-33.955 1.945-9.711 11.59-16.941 27.158-20.356 13.977-3.066 31.528-2.781 49.42.802 17.892 3.583 34.2 10.078 45.918 18.289 13.053 9.146 19.171 19.532 17.226 29.243-2.371 11.84-16.025 19.813-37.019 21.913l2.874 22.751z"
          fill="#D8A235"
        />
        <Path
          d="M535.679 647.292c3.057-15.268-22.665-33.293-57.454-40.259-34.788-6.966-65.467-.236-68.525 15.032-2.05 10.241 8.847 21.721 26.742 30.274l-8.992 18.648 73.01 14.62-2.603-20.608c20.567-.751 35.72-7.212 37.822-17.707"
          fill="#F4BD42"
        />
        <Path
          d="M432.82 643.386c5.023-2.428 10.624-3.11 16.12-2.239 4.094.65 5.852-5.606 1.726-6.26-7.348-1.166-14.396-.358-21.123 2.893-3.769 1.822-.475 7.419 3.277 5.606M484.367 647.258c7.821 1.027 15.05 4.448 20.716 9.93 3.009 2.911 7.604-1.675 4.591-4.591-7.003-6.776-15.705-10.57-25.307-11.831-4.142-.544-4.089 5.955 0 6.492"
          fill="#D19A2C"
        />
        <Path
          d="M792.864 830.552c-9.989 0-18.427 5.969-18.427 13.034 0 1.841.56 3.635 1.665 5.332l3.536 5.432-5.984 2.49c-7.568 3.15-12.269 8.969-12.269 15.188 0 9.645 10.853 17.493 24.192 17.493 7.322 0 14.193-2.41 18.85-6.612l3.462-3.123 3.591 2.972c4.652 3.852 11.311 6.061 18.27 6.061 13.409 0 24.319-7.891 24.319-17.592 0-5.238-3.272-10.191-8.977-13.588l-6.062-3.609 5.074-4.903c1.63-1.576 3.574-4.177 3.574-7.627 0-7.065-8.439-13.033-18.427-13.033-6.16 0-11.909 2.222-15.381 5.945l-3.398 3.642-3.901-3.098c-3.524-2.799-8.52-4.404-13.707-4.404m-12.824 78.736c-11.067 0-21.526-3.376-29.45-9.507-8.335-6.447-12.925-15.146-12.925-24.495 0-11.134 6.648-21.356 17.682-27.672a23.638 23.638 0 01-1.368-7.88c0-15.675 15.777-28.427 35.169-28.427 7.602 0 14.842 1.927 20.839 5.492 6.521-5.19 15.256-8.099 24.645-8.099 19.392 0 35.168 12.752 35.168 28.427 0 4.668-1.415 9.238-4.063 13.305 7.728 6.317 12.053 14.76 12.053 23.854 0 9.381-4.607 18.111-12.972 24.582-7.955 6.154-18.454 9.543-29.563 9.543-10.004 0-19.429-2.717-27.005-7.721-7.711 5.504-17.75 8.598-28.21 8.598"
          fill="#390"
        />
        <Path
          d="M828.626 887.471c-8.569 0-16.286-2.81-21.709-7.3-5.426 4.896-13.474 8.002-22.464 8.002-16.339 0-29.585-10.247-29.585-22.887 0-8.723 6.31-16.305 15.59-20.167-1.62-2.489-2.538-5.298-2.538-8.275 0-10.177 10.664-18.427 23.82-18.427 6.692 0 12.735 2.137 17.062 5.574 4.326-4.638 11.367-7.659 19.325-7.659 13.155 0 23.82 8.25 23.82 18.427 0 4.353-1.956 8.351-5.219 11.505 7.058 4.202 11.611 10.799 11.611 18.222 0 12.694-13.303 22.985-29.713 22.985m28.133-42.704c4.079-3.942 6.524-8.94 6.524-14.382 0-12.721-13.331-23.034-29.775-23.034-9.948 0-18.749 3.778-24.157 9.575-5.408-4.296-12.962-6.968-21.327-6.968-16.444 0-29.775 10.313-29.775 23.034 0 3.721 1.147 7.233 3.173 10.344-11.601 4.828-19.488 14.305-19.488 25.208 0 15.801 16.557 28.609 36.982 28.609 11.237 0 21.296-3.882 28.079-10.002 6.778 5.612 16.425 9.125 27.137 9.125 20.512 0 37.141-12.864 37.141-28.732 0-9.279-5.691-17.525-14.514-22.777"
          fill="#72EF43"
        />
        <Path
          d="M602.246 663.773c-9.661-2.536-19.339 1.094-21.133 7.928-.467 1.781-.381 3.658.257 5.58l2.041 6.152-6.42.889c-8.12 1.125-14.145 5.56-15.724 11.574-2.449 9.33 6.055 19.676 18.958 23.063 7.082 1.859 14.339 1.273 19.911-1.609l4.141-2.142 2.718 3.787c3.522 4.907 9.402 8.735 16.133 10.502 12.97 3.404 25.526-1.458 27.989-10.841 1.33-5.067-.577-10.688-5.232-15.422l-4.948-5.031 6.153-3.453c1.977-1.11 4.517-3.133 5.393-6.47 1.794-6.833-4.852-14.749-14.513-17.285-5.958-1.564-12.083-.874-16.387 1.845l-4.211 2.66-2.986-3.987c-2.698-3.602-7.123-6.423-12.14-7.74m-32.396 72.899c-10.704-2.81-19.963-8.731-26.071-16.673-6.425-8.352-8.656-17.932-6.282-26.974 2.827-10.769 11.854-18.968 24.13-22.276-.225-2.697 0-5.387.677-7.969 3.98-15.161 22.478-23.489 41.234-18.565 7.354 1.93 13.866 5.632 18.762 10.603 7.625-3.364 16.813-3.959 25.893-1.576 18.757 4.924 30.778 21.265 26.798 36.426-1.185 4.515-3.714 8.576-7.308 11.837 5.87 8.072 7.91 17.336 5.601 26.132-2.382 9.074-9.055 16.348-18.789 20.483-9.256 3.933-20.272 4.545-31.017 1.724-9.676-2.54-18.102-7.561-24.159-14.324-8.856 3.364-19.352 3.808-29.469 1.152"
          fill="#390"
        />
        <Path
          d="M622.384 727.907c-8.289-2.176-15.039-6.853-19.144-12.573-6.492 3.358-15.064 4.318-23.759 2.036-15.804-4.149-26.014-17.423-22.805-29.649 2.215-8.437 10.244-14.168 20.2-15.548-.935-2.818-1.11-5.769-.354-8.648 2.584-9.843 14.994-15.115 27.719-11.775 6.472 1.699 11.775 5.301 15.087 9.724 5.362-3.387 12.94-4.522 20.637-2.502 12.724 3.341 20.945 14.028 18.36 23.872-1.105 4.211-4.012 7.581-7.969 9.802 5.76 5.857 8.488 13.394 6.603 20.573-3.223 12.279-18.703 18.855-34.575 14.688m38.054-34.162c4.946-2.776 8.581-6.989 9.962-12.253 3.23-12.304-7.045-25.664-22.951-29.839-9.621-2.526-19.093-1.108-25.795 3.127-4.141-5.529-10.769-10.031-18.859-12.155-15.906-4.175-31.418 2.414-34.649 14.719-.944 3.599-.726 7.287.443 10.81-12.446 1.724-22.481 8.888-25.25 19.434-4.012 15.283 8.751 31.875 28.506 37.062 10.869 2.853 21.584 1.652 29.698-2.545 5.132 7.149 13.57 12.996 23.931 15.716 19.84 5.208 39.19-3.011 43.219-18.359 2.356-8.975-1.055-18.396-8.255-25.717"
          fill="#72EF43"
        />
        <Path
          d="M516.795 495.27c-9.989 0-18.427 5.969-18.427 13.034 0 1.841.56 3.635 1.665 5.332l3.536 5.432-5.984 2.49c-7.568 3.15-12.269 8.969-12.269 15.188 0 9.646 10.853 17.493 24.192 17.493 7.322 0 14.193-2.41 18.85-6.612l3.462-3.123 3.591 2.972c4.652 3.852 11.311 6.061 18.27 6.061 13.409 0 24.319-7.891 24.319-17.592 0-5.238-3.272-10.191-8.977-13.588l-6.062-3.609 5.074-4.903c1.63-1.576 3.574-4.177 3.574-7.627 0-7.065-8.439-13.033-18.427-13.033-6.16 0-11.909 2.222-15.381 5.945l-3.398 3.642-3.901-3.098c-3.524-2.799-8.52-4.404-13.707-4.404m-12.824 78.736c-11.067 0-21.526-3.376-29.45-9.507-8.335-6.447-12.925-15.146-12.925-24.495 0-11.134 6.648-21.356 17.682-27.672a23.638 23.638 0 01-1.368-7.88c0-15.675 15.777-28.427 35.169-28.427 7.602 0 14.841 1.927 20.839 5.492 6.521-5.19 15.256-8.099 24.644-8.099 19.393 0 35.169 12.752 35.169 28.427 0 4.668-1.415 9.238-4.063 13.305 7.728 6.317 12.053 14.76 12.053 23.854 0 9.381-4.607 18.111-12.972 24.582-7.955 6.154-18.454 9.543-29.563 9.543-10.004 0-19.429-2.717-27.005-7.721-7.711 5.504-17.75 8.598-28.21 8.598"
          fill="#390"
        />
        <Path
          d="M552.557 552.189c-8.569 0-16.286-2.81-21.709-7.3-5.426 4.896-13.474 8.002-22.464 8.002-16.339 0-29.585-10.247-29.585-22.887 0-8.723 6.31-16.305 15.59-20.167-1.62-2.489-2.538-5.298-2.538-8.275 0-10.177 10.665-18.427 23.82-18.427 6.692 0 12.735 2.137 17.062 5.574 4.326-4.638 11.367-7.659 19.325-7.659 13.156 0 23.82 8.25 23.82 18.427 0 4.353-1.956 8.351-5.219 11.505 7.058 4.202 11.611 10.799 11.611 18.222 0 12.694-13.303 22.985-29.713 22.985m28.133-42.705c4.079-3.941 6.524-8.939 6.524-14.381 0-12.721-13.331-23.034-29.775-23.034-9.947 0-18.749 3.778-24.156 9.575-5.409-4.296-12.963-6.968-21.328-6.968-16.444 0-29.775 10.313-29.775 23.034 0 3.721 1.147 7.233 3.173 10.344-11.6 4.828-19.488 14.304-19.488 25.208 0 15.801 16.557 28.609 36.982 28.609 11.237 0 21.296-3.882 28.079-10.002 6.779 5.612 16.425 9.125 27.137 9.125 20.512 0 37.141-12.864 37.141-28.732 0-9.279-5.691-17.525-14.514-22.778"
          fill="#72EF43"
        />
        <Path
          d="M942.864 651.385c-9.989 0-18.427 5.969-18.427 13.034 0 1.841.56 3.635 1.665 5.332l3.536 5.432-5.984 2.49c-7.568 3.15-12.269 8.969-12.269 15.188 0 9.645 10.853 17.493 24.192 17.493 7.322 0 14.193-2.41 18.85-6.612l3.462-3.123 3.591 2.972c4.652 3.852 11.311 6.061 18.27 6.061 13.409 0 24.319-7.891 24.319-17.592 0-5.238-3.272-10.191-8.977-13.588l-6.062-3.609 5.074-4.903c1.63-1.576 3.574-4.177 3.574-7.627 0-7.065-8.439-13.033-18.427-13.033-6.16 0-11.909 2.222-15.381 5.945l-3.398 3.642-3.901-3.098c-3.524-2.799-8.52-4.404-13.707-4.404m-12.824 78.736c-11.067 0-21.526-3.376-29.45-9.507-8.335-6.447-12.925-15.146-12.925-24.495 0-11.134 6.648-21.356 17.682-27.672a23.638 23.638 0 01-1.368-7.88c0-15.675 15.777-28.427 35.169-28.427 7.602 0 14.842 1.927 20.839 5.492 6.521-5.19 15.256-8.099 24.645-8.099 19.392 0 35.168 12.752 35.168 28.427 0 4.668-1.415 9.238-4.063 13.305 7.728 6.317 12.053 14.76 12.053 23.854 0 9.381-4.607 18.111-12.972 24.582-7.955 6.154-18.454 9.543-29.563 9.543-10.004 0-19.429-2.717-27.005-7.721-7.711 5.504-17.75 8.598-28.21 8.598"
          fill="#390"
        />
        <Path
          d="M978.626 708.304c-8.569 0-16.286-2.81-21.709-7.3-5.426 4.896-13.474 8.002-22.464 8.002-16.339 0-29.585-10.247-29.585-22.887 0-8.723 6.31-16.305 15.59-20.167-1.62-2.489-2.538-5.298-2.538-8.275 0-10.177 10.664-18.427 23.82-18.427 6.692 0 12.735 2.137 17.062 5.574 4.326-4.638 11.367-7.659 19.325-7.659 13.155 0 23.82 8.25 23.82 18.427 0 4.353-1.956 8.351-5.219 11.505 7.058 4.202 11.611 10.799 11.611 18.222 0 12.694-13.303 22.985-29.713 22.985m28.133-42.704c4.079-3.942 6.524-8.94 6.524-14.382 0-12.721-13.331-23.034-29.775-23.034-9.948 0-18.749 3.778-24.157 9.575-5.408-4.296-12.962-6.968-21.327-6.968-16.444 0-29.775 10.313-29.775 23.034 0 3.721 1.147 7.233 3.173 10.344-11.601 4.828-19.488 14.305-19.488 25.208 0 15.801 16.557 28.609 36.982 28.609 11.237 0 21.296-3.882 28.079-10.002 6.778 5.612 16.425 9.125 27.137 9.125 20.512 0 37.141-12.864 37.141-28.732 0-9.279-5.691-17.525-14.514-22.777"
          fill="#72EF43"
        />
        <Path
          d="M1068.956 777.583l5.675-22.07c-19.52-6.232-30.969-16.623-30.969-28.429 0-9.904 8.037-18.886 22.632-25.291 13.103-5.751 30.368-8.918 48.615-8.918 18.248 0 35.513 3.167 48.615 8.918 14.595 6.405 22.633 15.387 22.633 25.291 0 12.075-11.823 22.573-31.996 28.755l7.286 21.744z"
          fill="#D8A235"
        />
        <Path
          d="M1179.149 721.07c0-15.571-28.761-28.194-64.24-28.194s-64.24 12.623-64.24 28.194c0 10.444 12.94 19.561 32.166 24.433l-5.156 20.051h74.46l-6.599-19.695c20.02-4.775 33.609-14.086 33.609-24.789"
          fill="#F4BD42"
        />
        <Path
          d="M1077.007 737.812c4.747-3.604 10.164-5.497 16.116-5.729 4.173-.163 4.189-6.656 0-6.492-7.019.273-13.764 2.341-19.393 6.615-3.288 2.497-.06 8.139 3.277 5.606M1128.192 731.175c8.27-.535 16.052 1.228 23.062 5.708 3.539 2.262 6.792-3.36 3.276-5.606-7.885-5.04-17.024-7.197-26.338-6.594-4.156.269-4.182 6.763 0 6.492"
          fill="#D19A2C"
        />
        <Path
          d="M672.088 513.905l5.675-22.071c-19.521-6.231-30.969-16.622-30.969-28.428 0-9.904 8.037-18.886 22.632-25.292 13.103-5.75 30.368-8.917 48.615-8.917 18.248 0 35.513 3.167 48.615 8.917 14.595 6.406 22.633 15.388 22.633 25.292 0 12.075-11.823 22.573-31.996 28.755l7.286 21.744z"
          fill="#D8A235"
        />
        <Path
          d="M782.281 457.391c0-15.571-28.761-28.194-64.24-28.194s-64.24 12.623-64.24 28.194c0 10.444 12.94 19.561 32.166 24.433l-5.156 20.051h74.46l-6.599-19.695c20.02-4.775 33.609-14.086 33.609-24.789"
          fill="#F4BD42"
        />
        <Path
          d="M680.139 474.133c4.747-3.604 10.164-5.497 16.117-5.729 4.172-.163 4.188-6.656 0-6.492-7.02.273-13.765 2.341-19.394 6.615-3.288 2.497-.06 8.139 3.277 5.606M731.324 467.496c8.271-.535 16.052 1.228 23.062 5.708 3.539 2.262 6.792-3.36 3.276-5.606-7.885-5.04-17.024-7.197-26.338-6.594-4.156.269-4.182 6.763 0 6.492"
          fill="#D19A2C"
        />
        <Path
          d="M733.009 764.549l3.842-22.462c-19.966-4.607-32.23-14.021-33.201-25.788-.813-9.87 6.459-19.483 20.478-27.066 12.586-6.808 29.532-11.383 47.718-12.882 18.186-1.499 35.653.238 49.183 4.893 15.072 5.184 23.821 13.475 24.635 23.346.992 12.034-9.928 23.468-29.525 31.287l9.048 21.072z"
          fill="#D8A235"
        />
        <Path
          d="M838.185 699.171c-1.279-15.519-30.981-25.735-66.339-22.82-35.359 2.915-62.986 17.859-61.705 33.378.857 10.408 14.502 18.432 34.065 21.707l-3.492 20.407 74.208-6.119-8.195-19.086c19.559-6.404 32.338-16.8 31.458-27.467"
          fill="#F4BD42"
        />
        <Path
          d="M738.196 723.887c4.144-3.731 9.362-5.992 14.892-6.659 4.103-.495 4.151-6.994 0-6.493-7.344.886-13.954 3.583-19.483 8.561-3.117 2.807 1.489 7.384 4.591 4.591M788.827 713.325c7.805-1.155 15.642.083 22.62 3.773 3.699 1.956 6.979-3.648 3.277-5.606-8.646-4.572-17.997-5.852-27.623-4.427-4.13.611-2.368 6.866 1.726 6.26"
          fill="#D19A2C"
        />
        <Path
          d="M975.906 866.551c-19.217 0-37.373-4.733-51.124-13.327-14.664-9.165-22.74-21.659-22.74-35.179 0-13.52 8.076-26.013 22.74-35.178 13.751-8.595 31.907-13.328 51.124-13.328 19.217 0 37.374 4.733 51.124 13.328 14.665 9.165 22.741 21.658 22.741 35.178 0 13.52-8.076 26.014-22.741 35.179-13.75 8.594-31.907 13.327-51.124 13.327"
          fill="#C6093F"
        />
        <Path
          d="M1043.529 811.179c0 23.342-30.276 42.264-67.622 42.264-37.347 0-67.623-18.922-67.623-42.264 0-23.342 30.276-42.264 67.623-42.264 37.346 0 67.622 18.922 67.622 42.264"
          fill="#EA1145"
        />
        <Path
          d="M985.458 803.09c0 5.092-6.605 9.221-14.753 9.221s-14.753-4.129-14.753-9.221c0-5.092 6.605-9.221 14.753-9.221s14.753 4.129 14.753 9.221M989.202 834.301c0 6.385-8.281 11.561-18.497 11.561s-18.497-5.176-18.497-11.561 8.281-11.561 18.497-11.561 18.497 5.176 18.497 11.561M1018.326 833c0 3.869-5.019 7.006-11.209 7.006-6.191 0-11.21-3.137-11.21-7.006s5.019-7.006 11.21-7.006c6.19 0 11.209 3.137 11.209 7.006M963.903 780.983c0 3.039-3.941 5.502-8.803 5.502-4.862 0-8.804-2.463-8.804-5.502 0-3.039 3.942-5.502 8.804-5.502s8.803 2.463 8.803 5.502M1035.546 809.592c0 3.978-5.16 7.202-11.524 7.202-6.365 0-11.524-3.224-11.524-7.202 0-3.978 5.159-7.203 11.524-7.203 6.364 0 11.524 3.225 11.524 7.203M947.01 822.787c0 4.477-5.807 8.106-12.97 8.106-7.162 0-12.97-3.629-12.97-8.106s5.808-8.106 12.97-8.106c7.163 0 12.97 3.629 12.97 8.106M1022.228 786.185c0 5.665-7.348 10.257-16.412 10.257s-16.412-4.592-16.412-10.257 7.348-10.257 16.412-10.257 16.412 4.592 16.412 10.257"
          fill="#F9F7F8"
        />
        <Path
          d="M624.106 875.338c-19.217 0-37.373-4.733-51.124-13.327-14.664-9.165-22.74-21.659-22.74-35.179 0-13.52 8.076-26.013 22.74-35.178 13.751-8.595 31.907-13.328 51.124-13.328 19.217 0 37.374 4.733 51.125 13.328 14.664 9.165 22.74 21.658 22.74 35.178 0 13.52-8.076 26.014-22.74 35.179-13.751 8.594-31.908 13.327-51.125 13.327"
          fill="#C6093F"
        />
        <Path
          d="M691.728 819.966c0 23.341-30.276 42.263-67.621 42.263-37.348 0-67.624-18.922-67.624-42.263 0-23.343 30.276-42.265 67.624-42.265 37.345 0 67.621 18.922 67.621 42.265"
          fill="#EA1145"
        />
        <Path
          d="M633.658 811.877c0 5.092-6.606 9.221-14.753 9.221-8.148 0-14.753-4.129-14.753-9.221 0-5.092 6.605-9.221 14.753-9.221 8.147 0 14.753 4.129 14.753 9.221M637.402 843.087c0 6.385-8.281 11.561-18.497 11.561s-18.497-5.176-18.497-11.561 8.281-11.561 18.497-11.561 18.497 5.176 18.497 11.561M666.526 841.787c0 3.869-5.019 7.006-11.209 7.006-6.191 0-11.21-3.137-11.21-7.006s5.019-7.006 11.21-7.006c6.19 0 11.209 3.137 11.209 7.006M612.103 789.77c0 3.039-3.941 5.502-8.803 5.502-4.862 0-8.804-2.463-8.804-5.502 0-3.039 3.942-5.502 8.804-5.502s8.803 2.463 8.803 5.502M683.746 818.379c0 3.978-5.159 7.203-11.524 7.203-6.364 0-11.524-3.225-11.524-7.203s5.16-7.202 11.524-7.202c6.365 0 11.524 3.224 11.524 7.202M595.21 831.574c0 4.477-5.807 8.106-12.97 8.106s-12.97-3.629-12.97-8.106 5.807-8.106 12.97-8.106 12.97 3.629 12.97 8.106M670.428 794.971c0 5.665-7.348 10.257-16.412 10.257s-16.412-4.592-16.412-10.257 7.348-10.257 16.412-10.257 16.412 4.592 16.412 10.257"
          fill="#F9F7F8"
        />
        <Path
          d="M707.612 644.417c-19.217 0-37.373-4.733-51.124-13.327-14.664-9.165-22.74-21.659-22.74-35.179 0-13.52 8.076-26.013 22.74-35.178 13.751-8.595 31.907-13.328 51.124-13.328 19.217 0 37.374 4.733 51.125 13.328 14.664 9.165 22.74 21.658 22.74 35.178 0 13.52-8.076 26.014-22.74 35.179-13.751 8.594-31.908 13.327-51.125 13.327"
          fill="#C6093F"
        />
        <Path
          d="M775.234 589.045c0 23.342-30.276 42.264-67.622 42.264-37.347 0-67.623-18.922-67.623-42.264 0-23.342 30.276-42.264 67.623-42.264 37.346 0 67.622 18.922 67.622 42.264"
          fill="#EA1145"
        />
        <Path
          d="M717.163 580.956c0 5.092-6.605 9.221-14.753 9.221s-14.753-4.129-14.753-9.221c0-5.092 6.605-9.221 14.753-9.221s14.753 4.129 14.753 9.221M720.907 612.167c0 6.385-8.281 11.561-18.497 11.561s-18.497-5.176-18.497-11.561 8.281-11.561 18.497-11.561 18.497 5.176 18.497 11.561M750.031 610.866c0 3.869-5.019 7.006-11.209 7.006-6.191 0-11.21-3.137-11.21-7.006s5.019-7.006 11.21-7.006c6.19 0 11.209 3.137 11.209 7.006M695.608 558.849c0 3.039-3.941 5.502-8.803 5.502-4.862 0-8.804-2.463-8.804-5.502 0-3.039 3.942-5.502 8.804-5.502s8.803 2.463 8.803 5.502M767.252 587.459c0 3.978-5.159 7.203-11.524 7.203-6.364 0-11.524-3.225-11.524-7.203s5.16-7.203 11.524-7.203c6.365 0 11.524 3.225 11.524 7.203M678.716 600.653c0 4.477-5.807 8.106-12.97 8.106s-12.97-3.629-12.97-8.106 5.807-8.106 12.97-8.106 12.97 3.629 12.97 8.106M753.934 564.051c0 5.665-7.348 10.257-16.412 10.257s-16.413-4.592-16.413-10.257 7.349-10.257 16.413-10.257 16.412 4.592 16.412 10.257"
          fill="#F9F7F8"
        />
        <Path
          d="M1116.54 645.801c-19.217 0-37.373-4.733-51.124-13.327-14.664-9.165-22.74-21.659-22.74-35.179 0-13.52 8.076-26.013 22.74-35.178 13.751-8.595 31.907-13.328 51.124-13.328 19.217 0 37.374 4.733 51.125 13.328 14.664 9.165 22.74 21.658 22.74 35.178 0 13.52-8.076 26.014-22.74 35.179-13.751 8.594-31.908 13.327-51.125 13.327"
          fill="#C6093F"
        />
        <Path
          d="M1184.162 590.429c0 23.342-30.276 42.264-67.622 42.264-37.347 0-67.623-18.922-67.623-42.264 0-23.342 30.276-42.264 67.623-42.264 37.346 0 67.622 18.922 67.622 42.264"
          fill="#EA1145"
        />
        <Path
          d="M1126.091 582.34c0 5.092-6.605 9.221-14.753 9.221s-14.753-4.129-14.753-9.221c0-5.092 6.605-9.221 14.753-9.221s14.753 4.129 14.753 9.221M1129.835 613.55c0 6.385-8.281 11.561-18.497 11.561s-18.497-5.176-18.497-11.561 8.281-11.561 18.497-11.561 18.497 5.176 18.497 11.561M1158.959 612.25c0 3.869-5.019 7.006-11.209 7.006-6.191 0-11.21-3.137-11.21-7.006s5.019-7.006 11.21-7.006c6.19 0 11.209 3.137 11.209 7.006M1104.536 560.233c0 3.039-3.941 5.502-8.803 5.502-4.862 0-8.804-2.463-8.804-5.502 0-3.039 3.942-5.502 8.804-5.502s8.803 2.463 8.803 5.502M1176.18 588.842c0 3.978-5.159 7.203-11.524 7.203-6.365 0-11.524-3.225-11.524-7.203s5.159-7.202 11.524-7.202c6.365 0 11.524 3.224 11.524 7.202M1087.644 602.037c0 4.477-5.807 8.106-12.97 8.106s-12.97-3.629-12.97-8.106 5.807-8.106 12.97-8.106 12.97 3.629 12.97 8.106M1162.862 565.435c0 5.665-7.348 10.257-16.412 10.257-9.065 0-16.412-4.592-16.412-10.257s7.347-10.257 16.412-10.257c9.064 0 16.412 4.592 16.412 10.257"
          fill="#F9F7F8"
        />
      </G>
    </Svg>
  )
}

export default PizzaSvg;
