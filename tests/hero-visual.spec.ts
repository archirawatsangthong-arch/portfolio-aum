import { expect, test } from "@playwright/test";
import sharp from "sharp";

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
] as const;

for (const viewport of viewports) {
  test(`hero 3D renders without overflow on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    const canvas = page.locator(".hero-canvas canvas");
    await expect(canvas).toBeVisible();
    await page.waitForTimeout(800);

    const box = await canvas.boundingBox();
    expect(box?.width).toBeGreaterThan(viewport.width * 0.9);
    expect(box?.height).toBeGreaterThan(viewport.height * 0.9);

    const image = await canvas.screenshot();
    const stats = await sharp(image).stats();
    expect(Math.max(...stats.channels.slice(0, 3).map((channel) => channel.stdev))).toBeGreaterThan(1);

    await page.mouse.move(viewport.width * 0.78, viewport.height * 0.35);
    await page.waitForTimeout(400);
    const movedImage = await canvas.screenshot();
    expect(movedImage.equals(image)).toBe(false);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    await page.screenshot({ path: `test-results/hero-${viewport.name}.png`, fullPage: false });

    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 0.48));
    await page.waitForTimeout(500);
    await expect(page.getByRole("heading", { name: /TURNING LOGIC INTO REAL DIGITAL SYSTEMS/i })).toBeVisible();
    await page.screenshot({ path: `test-results/hero-stage2-${viewport.name}.png`, fullPage: false });
  });
}
