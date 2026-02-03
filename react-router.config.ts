import type { Config } from "@react-router/dev/config";

export default {
  /**
   * Server-Side Rendering
   * Required for:
   * - SEO
   * - Fast first paint
   * - Google ranking
   */
  ssr: true,
} satisfies Config;