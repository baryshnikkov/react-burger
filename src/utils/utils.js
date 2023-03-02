export const setCookie = (name, value, props) => {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export const getCookie = (name) => {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );

  const matchesOne = matches ? decodeURIComponent(matches[1]) : matches;

  return matches?.input.includes(';') ? decodeURIComponent(matches?.input.split(';')[matches?.input.split(';').length - 1]) : matchesOne;
};

export const calculateDate = (objData) => {
  const currentDateObj = new Date;
  const currentGMT = currentDateObj.getTimezoneOffset() / 60;
  const currentTime = currentDateObj.getTime();

  const year = objData?.createdAt.slice(0, 4);
  const month = objData?.createdAt.slice(5, 7) - 1;
  const day = objData?.createdAt.slice(8, 10);

  const orderDate = new Date(year, month, day);
  const orderTime = objData?.createdAt.slice(11, 16);

  const differenceOfDays = Math.ceil(Math.abs(currentTime - orderDate.getTime()) / (1000 * 3600 * 24));

  let interval;

  if (differenceOfDays <= 1) {
    interval = 'Сегодня';
  } else if (differenceOfDays <= 2) {
    interval = 'Вчера';
  } else {
    interval = `${differenceOfDays - 1} суток назад`
  }

  return {interval, time: orderTime, gmt: currentGMT};
};
