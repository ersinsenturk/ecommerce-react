import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductDetail, getProductComments } from "@/util/api";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/store/cart";

import ProductSlider from "@/components/Product/ProductSlider";
import ProductComments from "@/components/Product/ProductComments";
import ProductInfo from "@/components/Product/ProductInfo";

const ProductDetail = () => {
  const param = useParams();
  const {
    data: product,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", param.id],
    queryFn: () => getProductDetail(param.id),
    staleTime: 10000,
  });

  const {
    data: comments,
    isPending: isPendingComments,
    isError: isErrorComments,
    error: errorComments,
  } = useQuery({
    queryKey: ["comments", param.id],
    queryFn: () => getProductComments(param.id),
    staleTime: 10000,
  });

  const dispatch = useDispatch();
  const inCartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === Number(param.id))
  );

  const handleCartAction = (product) => {
    if (inCartItem) {
      dispatch(cartActions.removeFromCart(product.id));
    } else {
      dispatch(cartActions.addToCart(product));
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-6">
      {isPending && <p>Loading...</p>}
      {isError && <p>{error}</p>}
      {product && (
        <>
          <ProductSlider
            images={product.images}
            className="col-span-3 lg:col-span-1"
          />
          <ProductInfo
            product={product}
            addToCart={() => handleCartAction(product)}
            inCartItem={inCartItem}
          />
        </>
      )}
      {isPendingComments && <p>Loading...</p>}
      {isErrorComments && <p>{errorComments}</p>}
      {comments?.length > 0 ? (
        <ProductComments className="col-span-3 mt-6" comments={comments} />
      ) : null}
    </div>
  );
};

export default ProductDetail;
