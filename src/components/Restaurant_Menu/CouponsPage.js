const CouponsPage = ({ couponsData }) => {
//   console.log(couponsData);
  if (couponsData === undefined || couponsData?.length <= 0) {
    return;
  }
  return (
    <div className="coupons">
      {couponsData.map(({ info }, index) => (
        <div key={index} className="col-1">
          {info.offerTag ? (
            <div className="offer-tag">
              <span className="offer-text">{info.offerTag}</span>
              <hr className="offer-separate-bar" />
            </div>
          ) : (
            ""
          )}
          <div className="col-2">
            <span>*</span>
            <li className="itemCoupon">{info.header}</li>
            <p className="coupons-text">
              {info.couponCode} | {info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CouponsPage;
