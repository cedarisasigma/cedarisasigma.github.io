// setTimeout(function () {
//     // $(".dropdown").click();
//     $(".search").focus();
// }, 600);
const canvas1 = document.getElementById('panel-1');
const canvas2 = document.getElementById('panel-2');
const canvas3 = document.getElementById('panel-3');
const canvas4 = document.getElementById('panel-4');
const canvas5 = document.getElementById('panel-5');
const canvas6 = document.getElementById('panel-6');

const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');
const ctx4 = canvas4.getContext('2d');
const ctx5 = canvas5.getContext('2d');
const ctx6 = canvas6.getContext('2d');

var flagList = ["Afghanistan", 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands',
    'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos Islands', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D\'ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'North Korea', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Reunion', 'Saint Helena', 'Saint Kitts and Nevis',
    'Saint Lucia', 'Saint Pierre and Miquelon', 'Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Sao Tome and Principe', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'U.S. Virgin Islands', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'],
    random_flag_number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238];
randomFlagOrder = [],
    i = random_flag_number.length,
    j = 0;

var countryCoords = [[33.93911, 67.709953], [41.153332, 20.168331], [28.033886, 1.659626], [-14.270972, -170.132217], [42.546245, 1.601554], [-11.202692, 17.873887], [18.220554, -63.068615], [-75.250973, -0.071389], [17.060816, -61.796428], [-38.416097, -63.616672], [40.069099, 45.038189], [12.52111, -69.968338], [-25.274398, 133.775136], [47.516231, 14.550072], [40.143105, 47.576927], [25.03428, -77.39628], [25.930414, 50.637772], [23.684994, 90.356331], [13.193887, -59.543198], [53.709807, 27.953389], [50.503887, 4.469936], [17.189877, -88.49765], [9.30769, 2.315834], [32.321384, -64.75737], [27.514162, 90.433601], [-16.290154, -63.588653], [43.915886, 17.679076], [-22.328474, 24.684866], [-14.235004, -51.92528], [-6.343194, 71.876519], [4.535277, 114.727669], [42.733883, 25.48583], [12.238333, -1.561593], [-3.373056, 29.918886], [12.565679, 104.990963], [7.369722, 12.354722], [56.130366, -106.346771], [16.002082, -24.013197], [19.513469, -80.566956], [6.611111, 20.939444], [15.454166, 18.732207], [-35.675147, -71.542969], [35.86166, 104.195397], [-10.447525, 105.690449], [-12.164165, 96.870956], [4.570868, -74.297333], [-11.875001, 43.872219], [-4.038333, 21.758664], [-21.236736, -159.777671], [9.748917, -83.753428], [7.539989, -5.54708], [45.1, 15.2], [21.521757, -77.781167], [35.126413, 33.429859], [49.817492, 15.472962], [-0.228021, 15.827659], [56.26392, 9.501785], [11.825138, 42.590275], [15.414999, -61.370976], [18.735693, -70.162651], [-1.831239, -78.183406], [26.820553, 30.802498], [13.794185, -88.89653], [1.650801, 10.267895], [15.179384, 39.782334], [58.595272, 25.013607], [-26.522503, 31.465866], [9.145, 40.489673], [-51.796253, -59.523613], [61.892635, -6.911806], [-16.578193, 179.414413], [61.92411, 25.748151], [46.227638, 2.213749], [3.933889, -53.125782], [-17.679742, -149.406843], [-49.280366, 69.348557], [-0.803689, 11.609444], [13.443182, -15.310139], [42.315407, 43.356892], [51.165691, 10.451526], [7.946527, -1.023194], [36.137741, -5.345374], [39.074208, 21.824312], [71.706936, -42.604303], [12.262776, -61.604171], [16.995971, -62.067641], [13.444304, 144.793731], [15.783471, -90.230759], [49.465691, -2.585278], [9.945587, -9.696645], [11.803749, -15.180413], [4.860416, -58.93018], [18.971187, -72.285215], [15.199999, -86.241905], [22.396428, 114.109497], [47.162494, 19.503304], [64.963051, -19.020835], [20.593684, 78.96288], [-0.789275, 113.921327], [32.427908, 53.688046], [33.223191, 43.679291], [53.41291, -8.24389], [54.236107, -4.548056], [31.046051, 34.851612], [41.87194, 12.56738], [18.109581, -77.297508], [36.204824, 138.252924], [49.214439, -2.13125], [30.585164, 36.238414], [48.019573, 66.923684], [-0.023559, 37.906193], [-3.370417, -168.734039], [42.602636, 20.902977], [29.31166, 47.481766], [41.20438, 74.766098], [19.85627, 102.495496], [56.879635, 24.603189], [33.854721, 35.862285], [-29.609988, 28.233608], [6.428055, -9.429499], [26.3351, 17.228331], [47.166, 9.555373], [55.169438, 23.881275], [49.815273, 6.129583], [22.198745, 113.543873], [41.608635, 21.745275], [-18.766947, 46.869107], [-13.254308, 34.301525], [4.210484, 101.975766], [3.202778, 73.22068], [17.570692, -3.996166], [35.937496, 14.375416], [7.131474, 171.184478], [14.641528, -61.024174], [21.00789, -10.940835], [-20.348404, 57.552152], [-12.8275, 45.166244], [23.634501, -102.552784], [7.425554, 150.550812], [47.411631, 28.369885], [43.750298, 7.412841], [46.862496, 103.846656], [42.708678, 19.37439], [16.742498, -62.187366], [31.791702, -7.09262], [-18.665695, 35.529562], [21.913965, 95.956223], [-22.95764, 18.49041], [-0.522778, 166.931503], [28.394857, 84.124008], [52.132633, 5.291266], [-20.904305, 165.618042], [-40.900557, 174.885971], [12.865416, -85.207229], [17.607789, 8.081666], [9.081999, 8.675277], [-19.054445, -169.867233], [-29.040835, 167.954712], [40.339852, 127.510093], [17.33083, 145.38469], [60.472024, 8.468946], [21.512583, 55.923255], [30.375321, 69.345116], [7.51498, 134.58252], [31.952162, 35.233154], [8.537981, -80.782127], [-6.314993, 143.95555], [-23.442503, -58.443832], [-9.189967, -75.015152], [12.879721, 121.774017], [-24.703615, -127.439308], [51.919438, 19.145136], [39.399872, -8.224454], [18.220833, -66.590149], [25.354826, 51.183884], [45.943161, 24.96676], [61.52401, 105.318756], [-1.940278, 29.873888], [-21.115141, 55.536384], [-24.143474, -10.030696], [17.357822, -62.782998], [13.909444, -60.978893], [46.941936, -56.27111], [12.984305, -61.287228], [-13.759029, -172.104629], [43.94236, 12.457777], [23.885942, 45.079162], [14.497401, -14.452362], [44.016521, 21.005859], [-4.679574, 55.491977], [8.460555, -11.779889], [1.352083, 103.819836], [48.669026, 19.699024], [46.151241, 14.995463], [-9.64571, 160.156194], [5.152149, 46.199616], [-30.559482, 22.937506], [-54.429579, -36.587909], [35.907757, 127.766922], [6.877, 31.307], [40.463667, -3.74922], [7.873054, 80.771797], [12.862807, 30.217636], [3.919305, -56.027783], [60.128161, 18.643501], [46.818188, 8.227512], [34.802075, 38.996815], [0.18636, 6.613081], [23.69781, 120.960515], [38.861034, 71.276093], [-6.369028, 34.888822], [15.870032, 100.992541], [-8.874217, 125.727539], [8.619543, 0.824782], [-8.967363, -171.855881], [-21.178986, -175.198242], [10.691803, -61.222503], [33.886917, 9.537499], [38.963745, 35.243322], [38.969719, 59.556278], [21.694025, -71.797928], [-7.109535, 177.64933], [18.335765, -64.896335], [1.373333, 32.290275], [48.379433, 31.16558], [23.424076, 53.847818], [55.378051, -3.435973], [37.09024, -95.712891], [-32.522779, -55.765835], [41.377491, 64.585262], [-15.376706, 166.959158], [41.902916, 12.453389], [6.42375, -66.58973], [14.058324, 108.277199], [-13.768752, -177.156097], [24.215527, -12.885834], [15.552727, 48.516388], [-13.133897, 27.849332], [-19.015438, 29.154857]]

while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    randomFlagOrder.push(random_flag_number[j]);
    random_flag_number.splice(j, 1);
}

let random_number = randomFlagOrder.pop();
// let random_number = 238;
let random_flag = flagList[random_number];
// let random_flag = "Zimbabwee"; // for Testing
let flag_direct = "https://flagleunlimited.fun/flag/";
let flag_img_string = flag_direct.concat(random_flag, ".webp");
let random_flag_coords = countryCoords[random_number];
// console.log(random_flag);

var img = new Image();
img.onload = function () {

    var width = this.width;
    var height = this.height;
    var x1 = width / 3;
    var x2 = 2 * width / 3;
    var y1 = Math.floor(height / 2);

    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
    ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
    ctx6.clearRect(0, 0, canvas6.width, canvas6.height);
    ctx1.drawImage(img, 0, 0, x1, y1, 0, 0, x1, y1); // Panel 1
    ctx2.drawImage(img, x1, 0, x1, y1, 0, 0, x1, y1); // Panel 2
    ctx3.drawImage(img, x2, 0, x1, y1, 0, 0, x1, y1); // Panel 3
    ctx4.drawImage(img, 0, y1, x1, y1, 0, 0, x1, y1); // Panel 4
    ctx5.drawImage(img, x1, y1, x1, y1, 0, 0, x1, y1); // Panel 5
    ctx6.drawImage(img, x2, y1, x1, y1, 0, 0, x1, y1); // Panel 6

    var s1 = "height:";
    var s2 = "px";
    var s3 = s1.concat(y1);
    var final_string = s3.concat(s2);
    var box_list, box_index;
    box_list = document.getElementsByClassName("box");
    for (box_index = 0; box_index < box_list.length; ++box_index) {
        box_list[box_index].setAttribute("style", final_string);
    }
}

img.src = flag_img_string;

var nums = [1, 2, 3, 4, 5, 6],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
}

var box1 = document.getElementById("flip-box-1");
var box2 = document.getElementById("flip-box-2");
var box3 = document.getElementById("flip-box-3");
var box4 = document.getElementById("flip-box-4");
var box5 = document.getElementById("flip-box-5");
var box6 = document.getElementById("flip-box-6");

document.getElementById('win-toast-country').innerHTML = random_flag;
document.getElementById('lose-toast-country').innerHTML = random_flag;

var count = 0;
var streak = 0;
var high_streak = 0;
var win_count = 0;
var game_count = 0;
var avg_attempt = 0;
var game_over = false;
var new_game = true;

function flagGuess() {
    new_game = false;
    if (game_over == true) {
        return;
    }

    count += 1;
    document.getElementById('attempt-number').innerHTML = count;
    var guess = document.getElementById('guess');
    var flag_guess = guess.options[guess.selectedIndex].value;
    guess_coords = countryCoords[flagList.indexOf(flag_guess)];
    var distance = calcCrow(guess_coords[0], guess_coords[1], random_flag_coords[0], random_flag_coords[1])
    var table = document.getElementById("attemptTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell2.style.width = "80px";
    cell1.innerHTML = flag_guess;
    cell2.innerHTML = Math.round(distance) + " km";

    if (flag_guess == random_flag) {
        box1.classList.remove("unflip-animation");
        box2.classList.remove("unflip-animation");
        box3.classList.remove("unflip-animation");
        box4.classList.remove("unflip-animation");
        box5.classList.remove("unflip-animation");
        box6.classList.remove("unflip-animation");
        box1.classList.add("flip-animation");
        box2.classList.add("flip-animation");
        box3.classList.add("flip-animation");
        box4.classList.add("flip-animation");
        box5.classList.add("flip-animation");
        box6.classList.add("flip-animation");
        document.getElementById('win-toast').style.display = "block";
        streak += 1;
        if (streak > high_streak) {
            high_streak = streak;
        }
        document.getElementById('streak-number').innerHTML = streak;
        document.getElementById('highest-streak').innerHTML = high_streak;

        var box_list, box_index;
        box_list = document.getElementsByClassName("box");
        for (box_index = 0; box_index < box_list.length; ++box_index) {
            box_list[box_index].classList.add("merge-animation");
        }
        win_count += 1;
        game_count += 1;
        document.getElementById('win-rate').innerHTML = Math.round(win_count * 100 / game_count);
        avg_attempt = (avg_attempt * (game_count - 1) + count) / game_count;
        document.getElementById('average-attempts').innerHTML = avg_attempt.toFixed(2);
        game_over = true;
        document.getElementById('reload').style.display = "block";
        document.getElementById('reload').focus();
    } else if (count == 6) {
        box1.classList.remove("unflip-animation");
        box2.classList.remove("unflip-animation");
        box3.classList.remove("unflip-animation");
        box4.classList.remove("unflip-animation");
        box5.classList.remove("unflip-animation");
        box6.classList.remove("unflip-animation");
        box1.classList.add("flip-animation");
        box2.classList.add("flip-animation");
        box3.classList.add("flip-animation");
        box4.classList.add("flip-animation");
        box5.classList.add("flip-animation");
        box6.classList.add("flip-animation");
        document.getElementById('lose-toast').style.display = "block";
        document.getElementById('attempt-number').innerHTML = count;
        streak = 0;
        document.getElementById('streak-number').innerHTML = streak;

        var box_list, box_index;
        box_list = document.getElementsByClassName("box");
        for (box_index = 0; box_index < box_list.length; ++box_index) {
            box_list[box_index].classList.add("merge-animation");
        }
        game_count += 1;
        document.getElementById('win-rate').innerHTML = Math.round(win_count * 100 / game_count);
        game_over = true;
        document.getElementById('reload').style.display = "block";
        document.getElementById('reload').focus();
    } else {
        var random_panel = ranNums.pop();
        // console.log(random_panel);
        var class_text = "flip-box-";
        var random_string = class_text.concat(random_panel);
        document.getElementById(random_string).classList.remove("unflip-animation");
        document.getElementById(random_string).classList.add("flip-animation");
    }
}

function closeToast() {
    document.getElementById('win-toast').style.display = "none";
    document.getElementById('lose-toast').style.display = "none";
}


function toggleTutorial() {
    var x = document.getElementById("tutorial-page");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function toggleUpdates() {
    var x = document.getElementById("updates-page");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function toggleStats() {
    var x = document.getElementById("statistics");
    var checkBox = document.getElementById("statCheck");
    if (checkBox.checked == true) {
        x.style.display = "block";
        localStorage.setItem('Stats', 'On');
    } else {
        x.style.display = "none";
        localStorage.setItem('Stats', 'Off');
    }
}

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}


document.addEventListener('keyup', function (event) {
    var code = event.keyCode;
    if (code === 13) {
        if (game_over == false && new_game == true) {
            setTimeout(function () {
                $(".search").focus();
            }, 50);
        }
    }
});

function reloadFlagle() {
    new_game = true;
    attemptTable.innerHTML = "";

    if (streak == 239) {
        document.getElementById("complete-page").style.display = "block";
        localStorage.setItem("gameCompletion", "True");

    }

    document.getElementById('reload').style.display = "none";
    nums = [1, 2, 3, 4, 5, 6],
        ranNums = [],
        i = nums.length,
        j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        ranNums.push(nums[j]);
        nums.splice(j, 1);
    }

    var box_list, box_index;
    box_list = document.getElementsByClassName("box");
    for (box_index = 0; box_index < box_list.length; ++box_index) {
        box_list[box_index].classList.remove("merge-animation");
    }


    if (typeof guess !== 'undefined') {
        var guess = document.getElementById('guess');
    } else {
        guess = document.getElementById('guess');
    }

    document.getElementById("reset").reset();

    count = 0;
    document.getElementById('attempt-number').innerHTML = count;

    if (box1.classList.contains("flip-animation")) {
        box1.classList.add("unflip-animation");
    }
    if (box2.classList.contains("flip-animation")) {
        box2.classList.add("unflip-animation");
    }
    if (box3.classList.contains("flip-animation")) {
        box3.classList.add("unflip-animation");
    }
    if (box4.classList.contains("flip-animation")) {
        box4.classList.add("unflip-animation");
    }
    if (box5.classList.contains("flip-animation")) {
        box5.classList.add("unflip-animation");
    }
    if (box6.classList.contains("flip-animation")) {
        box6.classList.add("unflip-animation");
    }

    closeToast();

    random_number = randomFlagOrder.pop()
    random_flag = flagList[random_number];


    flag_img_string = flag_direct.concat(random_flag, ".webp");
    // console.log(flag_img_string);
    setTimeout(function () {
        img.src = flag_img_string;
    }, 400);
    setTimeout(function () {
        game_over = false;
    }, 1000);
    random_flag_coords = countryCoords[random_number];

    document.getElementById('win-toast-country').innerHTML = random_flag;
    document.getElementById('lose-toast-country').innerHTML = random_flag;
}