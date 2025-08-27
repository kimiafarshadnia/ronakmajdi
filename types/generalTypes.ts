export type MenuItem = {
  title: string;
  href: string;
  sub?: MenuItem[];
};


export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}