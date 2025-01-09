"use client";
import SubscriptionFormWrapper from "@/components/forms/subscription-form/subscription-form-wrapper";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { PricesList } from '@/lib/types'
import { useModal } from "@/providers/modal-provider";
import { useSearchParams } from "next/navigation";
import React from "react";
import useRazorpay from "react-razorpay";

type Props = {
  userInfo?: {
    email: string,
    name: string
  };
  planId?: string
  features: string[];
  buttonCta: string;
  title: string;
  description: string;
  amt: string;
  duration: string;
  highlightTitle: string;
  highlightDescription: string;
  customerId: string;
  prices: any;
  planExists: boolean;
  agencyId?: string
};


const PricingCard = ({
  
  userInfo,
  amt,
  buttonCta,
  customerId,
  description,
  duration,
  features,
  planId,
  highlightDescription,
  highlightTitle,
  planExists,
  prices,
  title,
  agencyId
}: Props) => {
  const { setOpen } = useModal();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  const handleManagePlan = async () => {
    setOpen(
      <CustomModal
        title={"Manage Your Plan"}
        subheading="You can change your plan at any time from the billings settings"
      >
        <SubscriptionFormWrapper
          planId={planId}
          agencyId={agencyId}
          userInfo={userInfo}
          customerId={customerId}
          planExists={planExists}
        />
      </CustomModal>,
      async () => ({
        plans: {
          defaultPlanId: plan ? plan : "",
          plans: prices,
        },
      })
    );
  };
  return (
    <Card className="flex flex-col justify-between lg:w-1/2">
      <div>
        <CardHeader className="flex flex-col md:!flex-row justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <p className="text-6xl font-bold">
            {amt}
            <small className="text-xs font-light text-muted-foreground">
              {duration}
            </small>
          </p>
        </CardHeader>
        <CardContent>
          <ul>
            {features.map((feature) => (
              <li
                key={feature}
                className="list-disc ml-4 text-muted-foreground"
              >
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
      <CardFooter>
        <Card className="w-full">
          <div className="flex flex-col md:!flex-row items-center justify-between rounded-lg border gap-4 p-4">
            <div>
              <p>{highlightTitle}</p>
              <p className="text-sm text-muted-foreground">
                {highlightDescription}
              </p>
            </div>

            <Button className="md:w-fit w-full" onClick={handleManagePlan}>
              {buttonCta}
            </Button>
          </div>
        </Card>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
