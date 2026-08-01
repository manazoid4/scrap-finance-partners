export function calculateCommission(revenue, rate = 0.15) {
  if (!Number.isFinite(rate) || rate < 0 || rate > 1) {
    throw new Error("Commission rate must be between 0 and 1.");
  }

  const paid = revenue.filter(
    (entry) => entry.status === "paid" && Number(entry.netCollectedGbp) > 0,
  );
  const netCollectedGbp = paid.reduce(
    (total, entry) => total + Number(entry.netCollectedGbp),
    0,
  );

  return {
    rate,
    qualifyingInvoices: paid.length,
    netCollectedGbp: Number(netCollectedGbp.toFixed(2)),
    commissionDueGbp: Number((netCollectedGbp * rate).toFixed(2)),
  };
}
