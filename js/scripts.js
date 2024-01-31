
window.onload = (event) => {

	//js popup wrap
	const togglePopupButtons = document.querySelectorAll('.js-btn-popup-toggle')
	const closePopupButtons = document.querySelectorAll('.js-btn-popup-close')
	const popupElements = document.querySelectorAll('.js-popup-wrap')
	const bodyElem = document.querySelector('body')

	function popupElementsClear() {
		document.body.classList.remove('menu-show')
		document.body.classList.remove('filter-show')
		document.body.classList.remove('search-show')
		popupElements.forEach(element => element.classList.remove('popup-right'))
	}

	function popupElementsClose() {
		togglePopupButtons.forEach(element => {
			if (!element.closest('.no-close')) {
				element.classList.remove('active')
			}
		})
	}


	for (i = 0; i < togglePopupButtons.length; i++) {
		togglePopupButtons[i].addEventListener('click', function (e) {
			popupElementsClear()
			if (this.classList.contains('active')) {
				this.classList.remove('active')
			} else {
				popupElementsClose()
				this.classList.add('active')
				if (this.closest('.popup-menu-wrap')) {
					document.body.classList.add('menu-show')
				}
				if (this.closest('.popup-search-wrap')) {
					document.body.classList.add('search-show')
				}
				if (this.closest('.popup-filter-wrap')) {
					document.body.classList.add('filter-show')
				}
			}
			e.preventDefault()
			e.stopPropagation()
			return false
		})
	}
	for (i = 0; i < closePopupButtons.length; i++) {
		closePopupButtons[i].addEventListener('click', function (e) {
			popupElementsClear()
			popupElementsClose()
			e.preventDefault()
			e.stopPropagation()
			return false;
		})
	}
	document.onclick = function (event) {
		if (!event.target.closest('.js-popup-block')) {
			popupElementsClear()
			popupElementsClose()
		}
	}
	popupElements.forEach(element => {
		if (element.classList.contains('js-popup-select')) {
			let popupElementSelectItem = element.querySelectorAll('.js-popup-block li a')
			if (element.querySelector('.js-popup-block .active')) {
				element.classList.add('select-active')
				let popupElementActive = element.querySelector('.js-popup-block .active').innerHTML
				let popupElementButton = element.querySelector('.js-btn-popup-toggle')
				popupElementButton.innerHTML = ''
				popupElementButton.insertAdjacentHTML('beforeend', popupElementActive)
			} else {
				element.classList.remove('select-active')
			}
			for (i = 0; i < popupElementSelectItem.length; i++) {
				popupElementSelectItem[i].addEventListener('click', function (e) {
					this.closest('.js-popup-wrap').classList.add('select-active')
					if (this.closest('.js-popup-wrap').querySelector('.js-popup-block .active')) {
						this.closest('.js-popup-wrap').querySelector('.js-popup-block .active').classList.remove('active')
					}
					this.classList.add('active')
					let popupElementActive = element.querySelector('.js-popup-block .active').innerHTML
					let popupElementButton = element.querySelector('.js-btn-popup-toggle')
					popupElementButton.innerHTML = ''
					popupElementButton.insertAdjacentHTML('beforeend', popupElementActive)
					popupElementsClear()
					popupElementsClose()
					if (!this.closest('.js-tabs-nav')) {
						e.preventDefault()
						e.stopPropagation()
						return false
					}
				})
			}
		}
	})
	
	//menu toggle
			
	let menuSideElement = document.querySelector('.js-side-menu')
	let menuSideElementToggle = document.querySelector('.js-side-menu-toggle')
	let menuSideElementClose = document.querySelector('.js-side-menu-close')
	menuSideElementToggle.addEventListener('click', function(e) {
		menuSideElement.classList.toggle('active')
		menuSideElementW.classList.remove('active')
		e.preventDefault()
		e.stopPropagation()
		return false
	})
	menuSideElementClose.addEventListener('click', function(e) {
		menuSideElement.classList.remove('active')
		e.preventDefault()
		e.stopPropagation()
		return false
	})

	let menuSideElementW = document.querySelector('.js-side-menu-widget')
	let menuSideElementWToggle = document.querySelector('.js-side-menu-widget-toggle')
	let menuSideElementWClose = document.querySelector('.js-side-menu-widget-close')
	menuSideElementWToggle.addEventListener('click', function(e) {
		menuSideElementW.classList.toggle('active')
		menuSideElement.classList.remove('active')
		e.preventDefault()
		e.stopPropagation()
		return false
	})
	menuSideElementWClose.addEventListener('click', function(e) {
		menuSideElementW.classList.remove('active')
		e.preventDefault()
		e.stopPropagation()
		return false
	})
};

$(document).ready(function () {


	//menu dotted
	function menuMore() {
		$('.main-header .nav-item-menu.menu-hidden').removeClass('menu-hidden')
		$('#nav-submenu li').remove()
		$('.main-header .nav-item-menu').each(function() {
			if ($('.nav-item-last').offset().top > 15) {
				$(this).clone().appendTo($('#nav-submenu'));
				$(this).addClass('menu-hidden');
			}
		})
	}
	menuMore();

	$(window).on('resize', function() {
		menuMore()
	});


	//slider-tabs-box
	if (!!$('.slider-tabs-box').offset()) {
		$('.slider-tabs-box .slider').slick({
			dots: false,
			slidesToShow: 1,
			variableWidth: true,
			centerMode: true,
			infinite: false,
			adaptiveHeight: false,
			rows: 1,
			swipeToSlide: true,
			autoplay: false,
			autoplaySpeed: 5000,
			prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-small ico-arrow-prev"></span>',
			nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-small ico-arrow-next"></span>',
		});

	}
	
	
	//toggle block
	$('.js-toggle-button').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
		} else {
			$(this).parents('.items-wrap').find('.active').removeClass('active')
			$(this).addClass('active')
		}
		return false;
	})
	
	
	//menu toggle
	$('.js-btn-menu-toggle').on('click', function() {
		$(this).toggleClass('active');
		return false;
	})
	
	//filter
	$('.js-btn-filter-toggle').on('click', function() {
		$('.filter-panel-box .filter-action-wrap').toggleClass('active');
		return false;
	})

});