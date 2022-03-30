import _ from "lodash";

const paramsHandler = (params: any) => {
  if (!_.isEmpty(params)) {
    let paramString = "?";

    const paramsKeys = Object.keys(params);
    const paramsValues = Object.values(params);

    for (let i = 0; i <= paramsKeys.length; i++) {
      paramString = `${paramString}${paramsKeys[i]}=${paramsValues[i]}&`;
    }

    return paramString.slice(0, -1);
  }
  return "";
};

export default paramsHandler;
