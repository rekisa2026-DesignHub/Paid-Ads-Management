import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import GrowthMockup from '../components/mockups/GrowthMockup';

export default function GrowthMarketing() {
  return (
    <ServiceTemplate
      slug="growth-marketing-enablement"
      seoTitle="Paid Ads Management for South African Businesses"
      description="Turn paid media into a predictable lead engine. We plan, launch and optimise Google, Meta and LinkedIn campaigns with clear conversion tracking and practical follow-up workflows."
      Mockup={GrowthMockup}
      accent="coral"
      showPricing
      showModules
    />
  );
}
