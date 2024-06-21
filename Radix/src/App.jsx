import { Overview } from "./overview.jsx";
import { Flex, Text, Card, Box, Container, Table } from "@radix-ui/themes";
export default function App() {
  return (
    <div className=" container flex flex-col w-[1334px] h-[600px] border-solid border-2 rounded-xl border-grey-600 ml-[90px] gap-2 ">
      <h1 className="text-3xl font-bold tracking-tight mb-2 mx-2.5 my-2.5">
        Dashboard
      </h1>
      <div className="flex gap-4 mx-2.5 my-2.5">
        <Card className=" flex flex-col w-[306px] h-[106px] items-center justify-items-center gap-1">
          <div className="flex justify-between mb-2">
            <Text className="tracking-tight text-sm font-medium ">
              Total Revenue
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <Text className="text-2xl font-bold">$45,231.89</Text>
            <Text className="text-xs text-muted-foreground">
              +20.1% from last month
            </Text>
          </div>
        </Card>
        <Card className=" flex flex-col w-[306px] h-[106px] items-center justify-items-center gap-1">
          <div className="flex justify-between mb-2">
            <Text className="tracking-tight text-sm font-medium ">
              Subscriptions
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <Text className="text-2xl font-bold">+2350</Text>
            <Text className="text-xs text-muted-foreground">
              +180.1% from last month
            </Text>
          </div>
        </Card>
        <Card className=" flex flex-col w-[306px] h-[106px] items-center justify-items-center gap-1">
          <div className="flex justify-between mb-2">
            <Text className="tracking-tight text-sm font-medium ">Sales</Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <path d="M2 10h20"></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <Text className="text-2xl font-bold">+12,234</Text>
            <Text className="text-xs text-muted-foreground">
              +19% from last month
            </Text>
          </div>
        </Card>
        <Card className=" flex flex-col w-[306px] h-[106px] items-center justify-items-center gap-1">
          <div className="flex justify-between mb-2">
            <Text className="tracking-tight text-sm font-medium ">
              Active Now
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <Text className="text-2xl font-bold">+573</Text>
            <Text className="text-xs text-muted-foreground">
              +201 since last hour
            </Text>
          </div>
        </Card>
      </div>
      <div className="flex gap-2 mx-2.5 my-2.5 ">
        <div className="w-3/4 h-[380px] border-solid border-2 rounded-xl border-grey-600">
          <Overview />
        </div>

        <div className="w-2/4 border-solid border-2 rounded-xl border-grey-600">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Olivia Martin</Table.RowHeaderCell>
                <Table.Cell>olivia.martin@email.com</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Jackson Lee</Table.RowHeaderCell>
                <Table.Cell>jackson.lee@email.com</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>William Kim</Table.RowHeaderCell>
                <Table.Cell>will@email.com</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Isabella Nguyen</Table.RowHeaderCell>
                <Table.Cell>isabella.nguyen@email.com</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Sofia Davis</Table.RowHeaderCell>
                <Table.Cell>sofia.davis@email.com</Table.Cell>
              </Table.Row>

            </Table.Body>
          </Table.Root>
        </div>
      </div>
    </div>
  );
}