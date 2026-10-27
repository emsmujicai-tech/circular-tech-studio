import { describe, expect, it } from 'vitest';
import { customerChatPolicy } from '../lib/customer-chat-policy';
describe('customer chatbot business rules', () => {
  it('uses quote-only pricing until prices are supplied', () => { expect(customerChatPolicy.numericPrices).toBeNull(); expect(customerChatPolicy.quoteLabel).toBe('Be om tilbud'); });
  it('only covers electric vehicles', () => { expect(customerChatPolicy.electricVehiclesOnly).toBe(true); });
  it('uses the company locations in Norway', () => { expect(customerChatPolicy.locations).toEqual(['Bergen','Stord']); });
});
