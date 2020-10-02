// import { appAlert } from '../utils';

// export default async function downloadProfile(symbol, callback) {
//   const api = 'https://financialmodelingprep.com/api/v3/profile/';
//   const key = '?apikey=2d204314b27b541f159ab9757c0b8c78';
//   const instrumentsURL = api.concat(symbol).concat(key);
//   fetch(instrumentsURL)
//     .then(response => response.json())
//     .then(data => callback(data[0]))
//     .catch(err => appAlert('downloadProfile', 'Error :  '.concat(err)));
// }
export default async function downloadProfile(symbol, callback) {
  callback(
    {
      symbol: 'AAPL',
      price: 116.44,
      beta: 1.34434,
      volAvg: 171508492,
      mktCap: 1991415170000,
      lastDiv: 0.7825,
      range: '53.1525-137.98',
      changes: 0.63,
      companyName: 'Apple Inc',
      exchange: 'Nasdaq Global Select',
      exchangeShortName: 'NASDAQ',
      industry: 'Consumer Electronics',
      website: 'https://www.apple.com/',
      description: 'Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services. The company is headquartered in Cupertino, California and currently employs 137,000 full-time employees. The company is considered one of the Big Four technology companies, alongside Amazon, Google, and Microsoft. The firm\'s hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, the Apple TV digital media player, the AirPods wireless earbuds and the HomePod smart speaker. Apple\'s software includes the macOS, iOS, iPadOS, watchOS, and tvOS operating systems, the iTunes media player, the Safari web browser, the Shazam acoustic fingerprint utility, and the iLife and iWork creativity and productivity suites, as well as professional applications like Final Cut Pro, Logic Pro, and Xcode. Its online services include the iTunes Store, the iOS App Store, Mac App Store, Apple Music, Apple TV+, iMessage, and iCloud. Other services include Apple Store, Genius Bar, AppleCare, Apple Pay, Apple Pay Cash, and Apple Card.',
      ceo: 'Mr. Timothy Cook',
      sector: 'Technology',
      country: 'US',
      fullTimeEmployees: '137000',
      phone: '14089961010',
      address: '1 Apple Park Way',
      city: 'Cupertino',
      state: 'CALIFORNIA',
      zip: '95014',
      dcfDiff: 89.92,
      dcf: 297.11,
      image: 'https://financialmodelingprep.com/image-stock/AAPL.jpg',
      ipoDate: '1980-12-12',
    },
  );
}
