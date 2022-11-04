//размери экрана
const screenWidth = window.screen.width

// мобайл меню
let mobileMenu = document.querySelector('.header_right_block_mobile');
let mobile_for_hiden_content = document.querySelector('.mobile_for_hiden_content');
let openCloseKey=0
function openClose(){
    openCloseKey++
    let openMenu = document.querySelector('.mobile_menu_block');
    let menuTopLin = document.querySelector('.menu_innerLins_top')
    let menuBottomLin = document.querySelector('.menu_innerLins_bottom')
    if (openCloseKey == 1){
        openMenu.style ='top: 100; opacity:1;';
        menuTopLin.style ='transform: rotate(45deg); top:21px;'
        menuBottomLin.style = 'transform: rotate(-45deg); bottom: 21px;';
        mobile_for_hiden_content.style.display="none";
    }else {
        openMenu.style ='top: -914; opacity:0;';
        menuTopLin.style ='transform: rotate(0deg); top:15px;'
        menuBottomLin.style = 'transform: rotate(0deg); bottom: 15px;';
        mobile_for_hiden_content.style.display="block";
    }
    if(openCloseKey == 2){
        openCloseKey = 0
    }
    console.log(openCloseKey)
}
mobileMenu.addEventListener("click", openClose);

//city block
let is_your_city = document.querySelector('.is_your_city_block');
let city="Екатеринбург";
//есди в куки сушествует город то его печатаемб если нет то открываем блок вопроса
let UTCDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toUTCString();
if(document.cookie){
    let cookieCity = document.cookie.split('=')[1];
     city = cookieCity;
}else {
    is_your_city.style.display="flex";
    //фиксируем город
    function fixing_city(){
        document.cookie= `city = ${city}; expires=${UTCDate} `;
        is_your_city.style.display="none";
    }
}
//на экран печатаем выбранный город
your_city.innerHTML = city;
starting_city.innerHTML = city;

//меню городов
let choose_city_arow = document.querySelector(".arow");
let choose_city = document.querySelector(".choose_city");
let list_of_cities = document.querySelector(".list_of_cities");
let transformArowKye = 180;

//открываем список городов
function transform_arow(){
    is_your_city.style.display="none";
    choose_city_arow.style = "transform: rotate(" + transformArowKye + "deg)";
    if (transformArowKye === 180) {
        list_of_cities.style.display = "flex";
        let city_group= document.querySelector('.all_cities');
        let citys_list = city_group.querySelectorAll('li');
        //получаем имя города на которого кликнем и обнавляем в куки
        function choosing_city(a){
            let  newCity = a.target.innerHTML;
            document.cookie = `city = ${newCity}; expires=${UTCDate}` ;
            your_city.innerHTML= newCity ;
            starting_city.innerHTML = newCity;
            choose_city_arow.style = "transform: rotate(0deg)";
            list_of_cities.style.display = "none";
            transformArowKye = 180;
        }
        for (let i = 0; i < citys_list.length ; i++) {
            citys_list[i].addEventListener('click', choosing_city);
        }
    }
    else {
        list_of_cities.style.display = "none";
    }
    if(transformArowKye === 180){
        transformArowKye = 0;
    }
    else if (transformArowKye === 0) {
        transformArowKye = 180;
    }
}
choose_city_arow.addEventListener("click",transform_arow)
choose_city.addEventListener("click",transform_arow)

let examDataBtn = document.querySelectorAll('.section_4_content_row')
if (examDataBtn){
// открывающиеся крестики
function section4cross(obg) {
    const buttonClickEvent = obg.target.closest('.section_4_content_row');
    let horizontal_line = buttonClickEvent.querySelector('.lain_row');
    let vertical_line = buttonClickEvent.querySelector('.lain_col');
    buttonClickEvent.classList.toggle('section_4_content_row_opend');
    horizontal_line.classList.toggle('transformdeg180');
    vertical_line.classList.toggle('transformdeg180');
}

    for (let i = 0; i <examDataBtn.length ; i++) {
        examDataBtn[i].addEventListener('click', section4cross);
    }

}

//footer инфо блок
const footerCrossEvent = document.querySelector('.footer_info_block_mobile');
if (footerCrossEvent) {
    function footerInfoOpen(){
            let horizontal_line = footerCrossEvent.querySelector('.footer_info_block_mobile_col2_horizontal');
            let vertical_line = footerCrossEvent.querySelector('.footer_info_block_mobile_col2_vertically');
            horizontal_line.classList.toggle('transformdeg180');
            vertical_line.classList.toggle('transformdeg180');
            footerCrossEvent.classList.toggle('openHeight300');
    }
    footerCrossEvent.addEventListener('click', footerInfoOpen)
}

//products_second_level SEO-текст
let productsSecondLevelGetmor = document.querySelector('.products_second_level_content_footer_get_mor');
if(productsSecondLevelGetmor){
    function openSEOText(){
        let seoContent = document.querySelector('.products_second_level_content_footer_content')
        seoContent.classList.toggle('openSEO300');
    }
    productsSecondLevelGetmor.addEventListener('click', openSEOText);
}

//products_third_level question_answers крестики
document.addEventListener('click', question_answers_f => {
    const question_answers= question_answers_f.target.closest('.services_second_level_section5_question_answers_rows');
    if (question_answers){
        let horizontal_line=question_answers.querySelector('.services_second_level_section5_question_answers_rows_col2_line_horizontal');
        let vertical_line=question_answers.querySelector('.services_second_level_section5_question_answers_rows_col2_line_vertically');
        let answers_block = question_answers.querySelector('.services_second_level_section5_question_answers_row2');
        horizontal_line.classList.toggle('transformdeg180');
        vertical_line.classList.toggle('transformdeg180');
        answers_block.classList.toggle('openHeight350');
    }
})

// открываем search block
let search_button = document.querySelector('.search_for_all');
let mobile_menu_search = document.querySelector('.mobile_menu_search');
let search_background_fon = document.querySelector('.search_background_fon');
let search_block = document.querySelector('.search_block');
function openSearch(){
    search_background_fon.style = "display:block";
    search_block.style = "display:block";
}
search_button.addEventListener('click', openSearch);
mobile_menu_search.addEventListener('click', openSearch);

//закрываем search block по крестику
let close_search_block = document.querySelector('.close_search_block');
function closeSearchBlock(){
    search_background_fon.style = "display:none";
    search_block.style = "display:none";
}
close_search_block.addEventListener('click', closeSearchBlock);

//открываем mobile search block
let mobile_search_block = document.querySelector('.mobile_search_block');
let mobile_menu_search_button = document.querySelector('.mobile_menu_search');
function openMobileSearchBlock(){
    mobile_search_block.style = "top:100; opacity:1;";
    openClose();
    mobile_for_hiden_content.style.display="none";
}
mobile_menu_search_button.addEventListener('click', openMobileSearchBlock);

//в мобайл меню закрываем поиск блок
let mobile_search_close_button = document.querySelector('.mobile_search_block_close_button');
function closeMobileSearchBlock(){
    mobile_search_block.style = "top:-900; opacity:0;";
    search_background_fon.style = "top:-900;";
    mobile_for_hiden_content.style.display="block"
}
mobile_search_close_button.addEventListener('click', closeMobileSearchBlock);

let about_company_dockCertificate = document.querySelectorAll('.about_company_content_block_section11_slider_cols_row2_col2');
let zoomDockKey=0
function zoomDock(a){
    if(screenWidth <= 480){
        about_company_dockCertificate_img = a.target;
        if (zoomDockKey === 0) {
            about_company_dockCertificate_img.style = "width: 370px; height: 530px; top:-90; left:-20;"
        } else {
            about_company_dockCertificate_img.style = "width: 100%; height: 100%; top:0; left:0;"
        }
        zoomDockKey++
        if (zoomDockKey === 2) {
            zoomDockKey = 0
        }
    }else {
        about_company_dockCertificate_img = a.target;
        if (zoomDockKey === 0) {
            about_company_dockCertificate_img.style = "width: 400px; height: 560px; top:-195; left:-150;"
        } else {
            about_company_dockCertificate_img.style = "width: 100%; height: 100%; top:0; left:0;"
        }
        zoomDockKey++
        if (zoomDockKey === 2) {
            zoomDockKey = 0;
        }
    }
}
for (let i = 0; i < about_company_dockCertificate.length; i++) {
    about_company_dockCertificate[i].addEventListener('click', zoomDock);
}

//оптовый заказ block
let openOrder = document.querySelector('.around_button');
if(openOrder) {
    let order_form_block = document.querySelector('.order_form');
    function openOrderBlock() {
        order_form_block.style = "display:flex";
        mobile_for_hiden_content.style = "display:none";
        search_background_fon.style = 'height:1000px; display:block';
        if (screenWidth <= 480) {
            mobile_for_hiden_content.style = "display:none";
            search_background_fon.style = 'height:770px; display:block';
        }
    }

    openOrder.addEventListener('click', openOrderBlock);

    let closeOrder = document.querySelector('.order_form_line_close');

    function closeOrderBlock() {
        order_form_block.style = 'display: none';
        mobile_for_hiden_content.style = "display:block";
        search_background_fon.style = 'display:none';
        if (screenWidth <= 480) {
            mobile_for_hiden_content.style = "display:block";
            search_background_fon.style = 'display:none';
        }
    }

    closeOrder.addEventListener('click', closeOrderBlock);
}


//SLIDERS

new Swiper('.swiper-container_all_project_slide', {
        //стрелки
        navigation: {
            nextEl: '#project_slide_Right',
            prevEl: '#project_slide_left'
        },
        keyboard:{
            enabled:true,
            onlyInViewport: true,
        },
        spaceBetween:50,


        breakpoints: {
            320:{
                slidesPerView: 1,
            },
            1100:{
                slidesPerView:1.8,
            },
            1230:{
                slidesPerView: 2.2,
            },
            1500:{

                slidesPerView: 2.4,
            },
            1600:{

                slidesPerView: 2.6,
            },
            1700:{

                slidesPerView: 2.8,
            },
            1800:{
                slidesPerView: 3,

            },
        },

    });

// О компании Команда слайдер
new Swiper('.swiper-container_about_company_team', {
    //стрелки
    navigation: {
        nextEl: '#about_company_section7_right',
        prevEl: '#about_company_section7_left'
    },
    keyboard:{
        enabled:true,
        onlyInViewport: true,
    },


    spaceBetween:50,

    breakpoints: {
        // 710:{
        //     slidesPerView:1,
        // },
        380:{
            slidesPerView: 1.7,
        },
        970:{
            slidesPerView: 1.7,
        },
        1150:{
            slidesPerView: 2,
        },
        1401:{
            slidesPerView: 2.2,
        },
        1500:{
            slidesPerView: 2.4,
        },
        1700 :{
            slidesPerView: 2.7
        },

        1800:{
            slidesPerView: 3
        }

    }

});

// О компании Рекомендации и отзывы слайдер

new Swiper('.swiper-container_about_company_feedback', {
    //стрелки
    navigation: {
        nextEl: '.about_company_arrow_toright',
        prevEl: '.about_company_arrow_toleft'
    },

    pagination: {
        el: '.swiper_pagination',
        clickable: true,
    },

    slidesPerView: 1.3,
    spaceBetween:50,

    breakpoints: {
        320 :{
            slidesPerView: 1,
        },
        1500:{
            slidesPerView: 1.1,
        },
        1700:{
            slidesPerView: 1.2,
        },
        1800:{
            slidesPerView: 1.3,
        },
    }

});

//career_second_level слайдер
new Swiper('.swiper-container_carrer_second_level', {
    //стрелки
    navigation: {
        nextEl: '.carrer_second_level_slide_left',
        prevEl: '.carrer_second_level_slide_right'
    },

    keyboard:{
        enabled:true,
        onlyInViewport: true,
    },

    spaceBetween:20,

    breakpoints: {
        300:{
            slidesPerView: 1,
        },
        480:{
            slidesPerView: 2,
        },
        1400:{
            slidesPerView: 2.2,
        },
        1500:{
            slidesPerView: 2.5,
        },
        1600:{
            slidesPerView: 3,
        },
    }
});

new Swiper('.swiper-container_double_slider', {
    //стрелки
    navigation: {
        nextEl: '.products_third_level_section1_slide_right ',
        prevEl: '.products_third_level_section1_slide_left'
    },

    slidesPerView: 1,

    thumbs: {
        swiper:{
            el: '.swiper-container_double_slider_mini',
            slidesPerView: 4,

            breakpoints: {
                1800:{
                    slidesPerView: 4,
                },
                1700:{
                    slidesPerView: 3.5,
                },
                1590:{
                    slidesPerView: 2.8,
                },
                1500:{
                    slidesPerView: 2.5,
                },
                1400:{
                    slidesPerView: 2,
                },
            }

        }
    }
});


//video
const player = new Plyr('#player');