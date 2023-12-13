import CouponData, { OfferCoupon } from "./CouponData";

const CouponsPage = ({ couponsData }) => {

  const OfferCouponData = OfferCoupon(CouponData);

  return (
    <>
      {couponsData.length > 0 && (
        <div className="coupon-cnt">
          {couponsData.map(({ info }, index) =>
            info.offerTag ? (
              <OfferCouponData key={index} info={info} />
            ) : (
              <CouponData key={index} info={info} />
            )
          )}
        </div>
      )}
    </>
  );
};

export default CouponsPage;
