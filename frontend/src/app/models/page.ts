export interface Page<T> {
  content: T[];           // قائمة العناصر
  number: number;         // رقم الصفحة الحالية (0-based)
  size: number;           // حجم الصفحة (عدد العناصر في كل صفحة)
  totalPages: number;     // إجمالي عدد الصفحات
  totalElements: number;  // إجمالي عدد العناصر عبر كل الصفحات
}
