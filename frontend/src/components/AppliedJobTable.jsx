import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
   <>
   <div>
    <Table>
        <TableCaption>Your Applied Jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
            [1,2].map((job,index)=>(
                <TableRow key={index}>
<TableCell>07-08-2024</TableCell>
<TableCell>Backend Developer</TableCell>
<TableCell>Microsoft</TableCell>
<TableCell><Badge>Selected</Badge></TableCell>
                </TableRow>
            ))
        }
        </TableBody>
    </Table>
   </div>
   </>
  )
}

export default AppliedJobTable