import { NextResponse } from 'next/server'
import { Octokit } from 'octokit'

export async function GET() {
    try {
        // Check for GitHub token
        if (!process.env.GITHUB_TOKEN) {
            throw new Error('GITHUB_TOKEN is not set')
        }

        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN,
        })

        // Fetch all repos of the authenticated user
        const { data: repos } = await octokit.rest.repos.listForAuthenticatedUser({
            visibility: 'public',
            per_page: 100, // You can adjust this or paginate
        })

        // Transform repos into your desired format
        const projects = repos.map(repo => ({
            title: repo.name,
            authorID: repo.owner?.id || 0,
            description: repo.description || '',
            language: repo.language || '',
            link: repo.html_url,
            image: '', // You can later associate images here if needed
            tags: repo.topics || [], // Requires `mediaType` preview if not included by default
        }))

        return NextResponse.json(projects)
    } catch (error: any) {
        console.error('GitHub API Error:', error)
        return NextResponse.json(
            {
                error: 'Failed to fetch GitHub repositories',
                details: error.message,
                status: error.status || 500,
            },
            { status: error.status || 500 }
        )
    }
}
