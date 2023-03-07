interface ICalculateDateParam {
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: string;
  updateAt: string;
  number: number;
}

interface ICalculateDateReturn {
  interval: string;
  time: string;
  gmt: number;
}

export const setCookie = (name: string, value: string, props?: any): void => {
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

export const getCookie = (name: string): string => {
  const matches: any = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );

  const matchesOne = matches ? decodeURIComponent(matches[1]) : matches;

  return matches?.input.includes(';') ? decodeURIComponent(matches?.input.split(';')[matches?.input.split(';').length - 1]) : matchesOne;
};

export const calculateDate = (objData: ICalculateDateParam): ICalculateDateReturn => {
  const currentDateObj: any = new Date;
  const currentGMT: number = currentDateObj.getTimezoneOffset() / 60;
  const currentTime: number = currentDateObj.getTime();

  const year: number = Number(objData?.createdAt.slice(0, 4));
  const month: number = Number(objData?.createdAt.slice(5, 7)) - 1;
  const day: number = Number(objData?.createdAt.slice(8, 10));

  const orderDate: any = new Date(year, month, day);
  const orderTime: string = objData?.createdAt.slice(11, 16);

  const differenceOfDays: number = Math.ceil(Math.abs(currentTime - orderDate.getTime()) / (1000 * 3600 * 24));

  let interval: string;

  if (differenceOfDays <= 1) {
    interval = 'Сегодня';
  } else if (differenceOfDays <= 2) {
    interval = 'Вчера';
  } else {
    interval = `${differenceOfDays - 1} суток назад`
  }

  return { interval, time: orderTime, gmt: currentGMT };
};
