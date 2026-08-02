import CampaignLinkBuilder from "@/components/campaign-link-builder";
import { summariseCampaigns } from "@/lib/campaign.mjs";
import { getWorkspace } from "@/lib/workspace-server";

export const metadata = { title: "Campaign links | Client workspace" };

export default async function CampaignsPage() {
  const workspace = await getWorkspace();
  let leads = [];

  if (workspace.configured) {
    const { data } = await workspace.supabase
      .from("leads")
      .select("utm_campaign, utm_source, status")
      .eq("organization_id", workspace.organization.id);
    leads = data ?? [];
  }

  const report = summariseCampaigns(leads);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return (
    <>
      <h1 className="text-3xl font-bold tracking-[-.03em]">Campaign links</h1>
      <p className="mt-2 max-w-2xl text-sm text-[#4d534e]">
        Give every legitimate partner, directory, event or outreach campaign its own link. Enquiries can then be attributed to the activity that produced them.
      </p>

      <div className="mt-6">
        <CampaignLinkBuilder siteUrl={siteUrl} />
      </div>

      <section aria-labelledby="report-heading" className="mt-8 border-y border-black bg-white">
        <div className="border-b border-black py-4">
          <h2 id="report-heading" className="font-bold">Campaign outcomes</h2>
          <p className="mt-1 max-w-2xl text-sm text-[#4d534e]">
            Progressed means the enquiry reached a meeting or became a client. Percentages use genuine lead records only.
          </p>
        </div>

        {report.length === 0 ? (
          <div className="py-10 text-center">
            <h3 className="font-bold">No attributed enquiries yet</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-[#4d534e]">Share a generated link through a real source. Its first genuine enquiry will appear here automatically.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead className="bg-graphite text-white">
                <tr><th className="px-4 py-3">Campaign</th><th className="px-4 py-3">Source</th><th className="px-4 py-3">Enquiries</th><th className="px-4 py-3">Meetings</th><th className="px-4 py-3">Won</th><th className="px-4 py-3">Progressed</th></tr>
              </thead>
              <tbody>
                {report.map((row) => (
                  <tr key={row.campaign + row.source} className="border-t border-black">
                    <td className="px-4 py-4 font-bold">{row.campaign}</td>
                    <td className="px-4 py-4">{row.source}</td>
                    <td className="px-4 py-4 font-mono">{row.enquiries}</td>
                    <td className="px-4 py-4 font-mono">{row.meetings}</td>
                    <td className="px-4 py-4 font-mono">{row.won}</td>
                    <td className="px-4 py-4 font-mono">{row.progressedRate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mt-8 border-t border-black pt-5">
        <h2 className="font-bold">Use one link per source</h2>
        <ul className="mt-2 max-w-2xl list-disc space-y-1 pl-5 text-sm text-[#4d534e]">
          <li>Use a stable campaign name so results remain grouped.</li>
          <li>Use the content label for a specific newsletter, event stand or message variant.</li>
          <li>Never add personal information to a campaign link.</li>
          <li>Stop any outreach immediately when a recipient opts out or objects.</li>
        </ul>
      </section>
    </>
  );
}
