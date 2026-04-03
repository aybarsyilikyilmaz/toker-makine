import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://finans.truncgil.com/today.json', {
      next: { revalidate: 60 }, // Cache for 60 seconds to protect provider and user from rate limits
    });
    
    if (!res.ok) throw new Error('API request failed');
    
    const data = await res.json();
    
    // Map the API data to a cleaner format for our UI
    const prices = {
      updateDate: data.Update_Date,
      gram: data['gram-altin'],
      ceyrek: data['ceyrek-altin'],
      yarim: data['yarim-altin'],
      tam: data['tam-altin'],
      ata: data['ata-altin'],
      usd: data['USD'],
    };

    return NextResponse.json(prices);
  } catch (error) {
    console.error('Gold Price Fetch Error:', error);
    return NextResponse.json({ error: 'Fiyatlar şu an çekilemiyor' }, { status: 500 });
  }
}
