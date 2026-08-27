# Maintenance & Operational Runbook

## 1. Routine Maintenance Tasks
- **Content Updates**: School calendar, news articles, and staff directory updates can be modified directly in the structured data files (`apps/web/src/data/`) or via the API endpoints.
- **Dependency Auditing**: Run `npm audit` quarterly to verify vulnerability patches.
- **Backup Strategy**: Inquiries and admissions submissions are persisted with daily timestamped snapshots.

## 2. Incident Response Checklist
1. Verify endpoint `/api/health` responsiveness.
2. Check application logs for unhandled rejections or runtime exceptions.
3. Validate client browser network tab for failed asset loads.
