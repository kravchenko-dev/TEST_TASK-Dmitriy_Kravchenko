// Добавление в корзинну

document.onclick = (event) => {
  let card = event.target.closest('.product-box__item')
  let Parentsum = document
    .getElementById(`${card.id}`)
    .querySelector('div.product-box__meta > p').textContent
  let sum = parseInt(`${Parentsum}`)
  let qty = document.getElementById(`${card.id}`).querySelector('input').value

  if (event.target.className === 'product-box__btn' && qty > 0) {
    const calc = qty * sum
    sum__cart += calc
    qty__cart += parseInt(`${qty}`)
    document.getElementById('qty__cart').innerHTML = qty__cart
    document.getElementById('sum__cart').innerHTML = sum__cart
  }
}

let qty__cart = 0
let sum__cart = 0

// Фильтр товаров
// так и не добился коректной работы

const filterBox = function () {
  let filterClass = document.getElementById('filterB').value
  const filter = document.querySelectorAll('.product-box__item')
  filter.forEach((element) => {
    element.style.display = ''
    if (!element.classList.contains(filterClass) && filterClass !== '0') {
      element.style.display = 'none'
    }
  })
}

const filterCash = function () {
  let money = document.getElementById('filterL').value
  const filterMoney = document.querySelectorAll('.product-box__item')
  // console.log(document.getElementById('filterB').value)
  let filBox = document.getElementById('filterB').value
  filterMoney.forEach((element) => {
    element.style.display = ''
    if (
      parseInt(element.querySelector('.product-box__meta > p').textContent) >
        money &&
      money !== '0'
    ) {
      element.style.display = 'none'
    } else if (filBox > '0' && money === '0') {
      return
    } else if (filBox < '0' && money === '0') {
      element.style.display = ''
    }
  })
}
// Оформить заказ

const renderModal = function () {
  greatModal()
  modalStyle()
}

const greatModal = function () {
  const btn = document.getElementById('modal-window')
  const modal =
    '<div id="modal"><form action="" method="post" id="modal-content"><p> Ваше имя: </p><input type="text" name="fnm" ><p> E-Mail: </p><input type="text" name="email" value=""></input><input type="button" value="отправить" name="Submit" onClick="return Formdata(this.form)" id="modal-btn"></form></div>'
  btn.insertAdjacentHTML('afterbegin', modal)
}

const modalStyle = function () {
  document.getElementById('modal').style.cssText =
    ' position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.6); z-index: 1000;'
  document.getElementById('modal-content').style.cssText =
    'background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 10%; z-index: 99999;'
  document.getElementById('modal-btn').style.cssText =
    'padding: 5px 32px; background: darkorange;text-transform: uppercase; border: 0; border-radius: 4px; font-size: 16px; left: auto; margin-top: 5px;'
}

function Formdata(data) {
  const inFnm = data.fnm.value.replace(/\s+/gi, '')
  const inEmail = data.email.value.replace(/\s+/gi, '')

  if (inFnm != null && inFnm < 3) {
    alert('Заполните поле «Ваше имя»')
    return false
  }

  if (inEmail != null && inEmail == 0) {
    alert('поле «E-Mail» пустое')
    return false
  } else {
    alert('Благодарим за покупки')
    document.getElementById('qty__cart').innerHTML = 'XXX'
    document.getElementById('sum__cart').innerHTML = 'XXX'
    document.getElementById('modal').style.display = 'none'
  }
}
