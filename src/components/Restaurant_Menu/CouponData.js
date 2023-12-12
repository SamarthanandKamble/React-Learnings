const CouponData = ({ info }) => {
  return (
    info && (
      <div className="coupons">
        <li className="item-coupon">*{info.header}</li>
        <p className="coupons-text">{info.couponCode}</p>
        {info.description && <p>| {info.description}</p>}
      </div>
    )
  );
};

export default CouponData;

export function OfferCoupon(CouponData) {
  return ({ info }) => {
    console.log("props", info);
    return (
      <div className="offer-tag">
        <span className="offer-text">{info.offerTag}</span>
        <hr className="offer-separate-bar" />
        <CouponData info={info} />
      </div>
    );
  };
}
