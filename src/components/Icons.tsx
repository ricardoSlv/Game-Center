/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const IconWrapper= styled.div`
    filter: grayscale(100%) brightness(120%) opacity(0.8);
    transition: 0.7s;
    &:hover {filter: grayscale(20%);}
`

export function SnakeIcon(props:{scale:number}) {
    return (
        //https://www.flaticon.com/free-icon/snake_616487
        //From https://www.freepik.com/
        <IconWrapper>
            <svg version="1.1" 
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                height={`${props.scale*140}`}
                width={`${props.scale*140}`}
                enableBackground="new 0 0 512 512;" >
                <path fill="#FF8087" d="M95.332,105.225c-2.594-3.661-7.664-4.538-11.321-1.952l-54.087,38.169h-21.8
            c-4.49,0-8.124,3.638-8.124,8.124c0,4.487,3.634,8.124,8.124,8.124h13.099l-4.554,13.678c-1.42,4.256,0.881,8.858,5.133,10.278
            c0.857,0.286,1.722,0.42,2.571,0.42c3.404,0,6.569-2.154,7.704-5.558l7.282-21.845l54.014-38.118
            C97.038,113.96,97.918,108.89,95.332,105.225z"/>
                <path fill="#AFD755" d="M413.655,440.97c98.844-42.652,103.165-97.57,96.136-119.831
            c-8.124-25.726-71.594-95.459-279.437-82.595l-16.587,38.978c50.268-7.497,97.998-6.144,134.967,2.054
            c61.4,13.615,109.266,39.582,96.064,74.11c-15.942,41.696-104.15,69.012-169.575,69.176c-11.09,0.028-28.77-0.692-44.452-4.523
            l-52.345,36.739C237.533,479.885,333.575,475.525,413.655,440.97z"/>
                <path fill="#96BE4B" d="M215.967,271.04l-2.2,6.482c50.268-7.497,97.998-6.144,134.967,2.054
            c61.4,13.615,109.266,39.582,96.064,74.11c-7.774,20.331-32.78,37.205-63.897,49.217c58.541-19.193,106.345-49.904,95.04-81.765
            C462.757,283.988,363.556,238.544,215.967,271.04z"/>
                <g>
                    <path fill="#AFD755" d="M256.244,154.644C269.002,30.472,138.111,1.301,62.279,84.573
                c-10.323,11.335-7.072,26.496,11.836,33.065c1.795,5.475,13.99,34.238,70.596,25.954c0,0,2.031,14.725-25.557,113.907
                c-13.465,48.407-26.742,122.201,23.018,173.992c8.63,8.983,19.935,16.411,33.196,22.33c24.032-9.549,47.254-20.26,68.662-32.949
                c-12.845-1.798-25.906-5.13-34.834-11.334c-42.777-29.726-20.79-74.744,5.926-132.192
                C222.653,261.393,251.849,197.415,256.244,154.644z"/>
                    <path fill="#AFD755" d="M239.663,400.739C172.425,449.452,98.88,430.873,83.95,386.522
                c-11.509-34.189,8.463-59.12,26.234-73.845l11.171-52.299c-37.574,14.725-69.224,43.548-80.734,69.952
                C3.599,415.26,91.397,524.632,236.955,449.483c118.753-61.31,81.006-196.5,165.395-240.788c3.074-1.613,1.663-6.32-1.789-5.949
                C308.247,212.678,302.466,355.238,239.663,400.739z"/>
                </g>
                <path fill="#96BE4B" d="M402.349,208.695c-11.713,0.737-53.688,7.507-84.153,96.196
            c-11.129,32.396-41.298,153.005-190.918,150.974c-58.692-0.797-96.136-50.776-94.013-99.69
            c-11.592,79.005,72.599,160.988,203.689,93.309C355.707,388.174,317.961,252.984,402.349,208.695z"/>
                <path fill="#FFDC64" d="M172.323,428.471c-50.065-68.835-1.907-165.888,17.918-206.176
            c20.987-42.652,13.54-96.424,13.54-96.424c-14.217,9.19-59.069,17.722-59.069,17.722s2.031,14.725-25.557,113.907
            c-13.162,47.319-25.98,118.84,19.922,170.41C149.383,429.726,160.581,429.975,172.323,428.471z"/>
                <path fill="#FFC850" d="M165.868,104.884c-45.555,17.396-75.585,18.337-92.516,12.312l0,0
            c24.984,58.386,130.466,10.523,130.428,8.676C203.273,101.279,185.501,97.386,165.868,104.884z"/>
                <path fill="#4B3F4E" d="M144.204,94.34c-5.609,0-10.155-4.546-10.155-10.155v-8.124c0-5.609,4.546-10.155,10.155-10.155
            s10.155,4.546,10.155,10.155v8.124C154.359,89.794,149.813,94.34,144.204,94.34z"/>
            </svg>
        </IconWrapper>
    )
}

export function TetrisIcon(props:{scale:number}) {
    return (
        //https://www.flaticon.com/free-icon/tetris_404362?term=tetris&page=2&position=2
        //From https://www.freepik.com/
        <IconWrapper>
            <svg version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                height={`${props.scale*130}`}
                width={`${props.scale*130}`}
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512;" >
                <polygon fill="#FBAC50" points="307.2,409.6 307.2,307.2 204.8,307.2 204.8,204.8 102.4,204.8 102.4,102.4 0,102.4 0,512 
	409.6,512 409.6,409.6 "/>
                <polygon fill="#C7EAF0" points="204.8,307.2 204.8,204.8 102.4,204.8 102.4,307.2 0,307.2 0,409.6 307.2,409.6 307.2,307.2 
	"/>
                <rect y="409.6" fill="#FF648D" width="409.6" height="102.4" />
                <polygon fill="#FD4D21" points="409.6,102.4 409.6,0 307.2,0 307.2,204.8 409.6,204.8 409.6,307.2 512,307.2 512,102.4 " />
            </svg>
        </IconWrapper >
    )
}

export function PacManIcon(props:{scale:number}) {
    
    return (
        //https://svgsilh.com/image/151558.html
        <IconWrapper>
            <svg version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width={`${props.scale*160}`} 
                height={`${props.scale*140}`} 
                viewBox="0 0 1280.000000 936.000000"
                preserveAspectRatio="xMidYMid meet">
                <metadata>
                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g transform="translate(0.000000,936.000000) scale(0.100000,-0.100000)"
                    fill="#ffee00" stroke="none">
                    <path d="M4365 9350 c-498 -38 -961 -143 -1415 -322 -173 -68 -518 -240 -683
                    -340 -1240 -752 -2058 -2015 -2231 -3443 -125 -1033 95 -2074 625 -2960 398
                    -664 941 -1210 1606 -1613 165 -100 510 -272 683 -340 214 -84 460 -161 660
                    -207 627 -144 1252 -162 1874 -55 1126 193 2143 796 2860 1694 135 168 317
                    430 305 439 -2 2 -894 559 -1981 1238 -1088 679 -1978 1236 -1978 1239 0 3
                    890 560 1978 1239 1087 679 1979 1236 1981 1238 12 9 -173 275 -314 450 -308
                    384 -671 714 -1087 987 -632 414 -1333 663 -2089 741 -183 19 -625 27 -794 15z"/>
                    <path d="M7652 5286 c-134 -33 -288 -143 -368 -263 -21 -31 -51 -96 -68 -143
                    -26 -74 -30 -99 -30 -195 -1 -122 13 -182 67 -294 41 -85 158 -204 247 -254
                    140 -77 318 -98 470 -56 280 77 476 350 456 637 -6 101 -47 226 -100 305 -83
                    124 -246 238 -384 266 -70 14 -224 13 -290 -3z"/>
                    <path d="M9825 5281 c-275 -80 -454 -316 -455 -598 0 -112 14 -172 65 -279 61
                    -127 152 -218 279 -279 50 -24 115 -48 144 -54 68 -14 196 -14 264 0 73 15
                    203 78 264 127 95 77 176 204 208 329 21 78 21 227 0 307 -57 221 -228 393
                    -451 450 -82 21 -240 20 -318 -3z"/>
                    <path d="M12020 5284 c-169 -44 -323 -169 -399 -324 -93 -190 -93 -370 0 -559
                    51 -103 152 -210 249 -264 184 -101 417 -103 605 -4 86 45 212 174 253 259 53
                    108 76 216 69 323 -10 165 -65 285 -186 406 -60 60 -94 85 -161 117 -47 22
                    -109 45 -138 51 -73 15 -226 13 -292 -5z"/>
                </g>
            </svg>
        </IconWrapper>
    )
}