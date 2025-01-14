"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useBasketStore from "@/store/store";

function SuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearBasket = useBasketStore((state) => state.clearBasket);

  useEffect(() => {
    if (orderNumber) {
      clearBasket();
    }
  }, [orderNumber, clearBasket]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="bg-yellow-50 p-12 rounded-xl shadow-lg max-w-2xl w-full mx-4">
        <div className="flex justify-center mb-8">
          <div className="h-16 w-16 bg-blue-400 rounded-full flex items-center justify-center">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-center">
          Thank You for Your Order!
        </h1>

        <div className="border-t border-b border-gray-200 py-6 mb-6">
          <p className="text-lg text-gray-800 mb-4">
            Your order has been confirmed and will be shipped shortly.
          </p>
          <div className="space-y-2">
            {orderNumber && (
              <p className="text-gray-700 flex items-center space-x-5">
                <span>Order Number:</span>
                <span className="font-mono text-sm text-blue-600">
                  {orderNumber}
                </span>
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700">
            A confirmation email has been sent to your registered email address.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-400 hover:bg-blue-600">
              <Link href="/orders" className="font-bold">
                View Order Details
              </Link>
            </Button>
            <Button asChild variant="outline" className="hover:bg-blue-400">
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
